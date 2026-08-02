#!/usr/bin/env bash

# ============================================================
# VuePress 本地构建并部署到 GitHub pages 分支
#
# 使用方法：
#   chmod +x deploy-pages.sh
#   ./deploy-pages.sh
#
# 可选参数：
#   ./deploy-pages.sh "自定义提交信息"
#
# 默认配置：
#   源码分支：当前分支
#   部署分支：pages
#   构建目录：docs/.vuepress/dist
#   Node 最大堆内存：10240 MB
# ============================================================

set -Eeuo pipefail

# -------------------- 可修改配置 --------------------

# GitHub 远程仓库名称
REMOTE_NAME="origin"

# GitHub Pages 部署分支
DEPLOY_BRANCH="pages"

# VuePress 构建命令
BUILD_COMMAND="pnpm run docs:build"

# VuePress 构建产物目录
DIST_DIR="docs/.vuepress/dist"

# Node.js 最大堆内存，单位 MB
NODE_MEMORY_MB="32768"

# Git 提交用户名
# 留空表示使用当前项目或全局 Git 配置
DEPLOY_GIT_NAME=""

# Git 提交邮箱
# 留空表示使用当前项目或全局 Git 配置
DEPLOY_GIT_EMAIL=""

# 是否每次覆盖 pages 分支历史
#
# true：
#   pages 分支每次只保留一次提交，仓库体积更小
#
# false：
#   保留 pages 分支以前的部署记录
FORCE_SINGLE_COMMIT="true"

# ---------------------------------------------------

# 自定义提交信息
COMMIT_MESSAGE="${1:-deploy: update GitHub Pages $(date '+%Y-%m-%d %H:%M:%S')}"

# 脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 临时部署目录
TEMP_DIR=""

# 输出日志
log_info() {
    printf '\033[1;34m[INFO]\033[0m %s\n' "$1"
}

log_success() {
    printf '\033[1;32m[SUCCESS]\033[0m %s\n' "$1"
}

log_warning() {
    printf '\033[1;33m[WARNING]\033[0m %s\n' "$1"
}

log_error() {
    printf '\033[1;31m[ERROR]\033[0m %s\n' "$1" >&2
}

# 脚本结束时清理临时目录
cleanup() {
    if [[ -n "${TEMP_DIR}" && -d "${TEMP_DIR}" ]]; then
        log_info "清理临时目录：${TEMP_DIR}"
        rm -rf "${TEMP_DIR}"
    fi
}

trap cleanup EXIT

# 捕获错误
handle_error() {
    local exit_code=$?
    local line_number=$1

    log_error "脚本执行失败，退出码：${exit_code}，出错行：${line_number}"
    exit "${exit_code}"
}

trap 'handle_error $LINENO' ERR

# 检查命令是否存在
check_command() {
    local command_name="$1"

    if ! command -v "${command_name}" >/dev/null 2>&1; then
        log_error "未找到命令：${command_name}"
        exit 1
    fi
}

# 获取 Git 仓库地址
get_remote_url() {
    git remote get-url "${REMOTE_NAME}" 2>/dev/null
}

main() {
    cd "${SCRIPT_DIR}"

    log_info "项目目录：${SCRIPT_DIR}"

    # 1. 检查必要命令
    check_command git
    check_command pnpm
    check_command node
    check_command rsync
    check_command mktemp

    # 2. 检查是否位于 Git 仓库
    if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        log_error "当前目录不是 Git 仓库：${SCRIPT_DIR}"
        exit 1
    fi

    # 3. 检查远程仓库
    if ! git remote get-url "${REMOTE_NAME}" >/dev/null 2>&1; then
        log_error "未找到远程仓库：${REMOTE_NAME}"
        log_error "请先执行：git remote add origin <GitHub仓库地址>"
        exit 1
    fi

    local remote_url
    remote_url="$(get_remote_url)"

    local current_branch
    current_branch="$(git branch --show-current)"

    log_info "当前分支：${current_branch:-分离 HEAD}"
    log_info "远程仓库：${remote_url}"
    log_info "部署分支：${DEPLOY_BRANCH}"
    log_info "Node.js 版本：$(node --version)"
    log_info "pnpm 版本：$(pnpm --version)"
    log_info "Node 最大堆内存：${NODE_MEMORY_MB} MB"

    # 4. 检查工作区状态
    if [[ -n "$(git status --porcelain)" ]]; then
        log_warning "当前工作区存在未提交修改。"
        log_warning "这些源码修改不会直接进入 pages 分支，但会参与本次本地构建。"
    fi

    # 5. 清理旧构建文件
    if [[ -d "${DIST_DIR}" ]]; then
        log_info "删除旧构建目录：${DIST_DIR}"
        rm -rf "${DIST_DIR}"
    fi

    # 可选：清除 VuePress 缓存
    if [[ -d "docs/.vuepress/.cache" ]]; then
        log_info "清理 VuePress 缓存"
        rm -rf "docs/.vuepress/.cache"
    fi

    if [[ -d "docs/.vuepress/.temp" ]]; then
        log_info "清理 VuePress临时文件"
        rm -rf "docs/.vuepress/.temp"
    fi

    # 6. 本地构建
    log_info "开始执行 VuePress 本地构建"

    export NODE_OPTIONS="--max-old-space-size=${NODE_MEMORY_MB}"

    # shellcheck disable=SC2086
    ${BUILD_COMMAND}

    # 7. 检查构建结果
    if [[ ! -d "${DIST_DIR}" ]]; then
        log_error "构建完成，但没有找到输出目录：${DIST_DIR}"
        exit 1
    fi

    if [[ -z "$(find "${DIST_DIR}" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
        log_error "构建目录为空：${DIST_DIR}"
        exit 1
    fi

    local dist_size
    dist_size="$(du -sh "${DIST_DIR}" | awk '{print $1}')"

    local file_count
    file_count="$(find "${DIST_DIR}" -type f | wc -l | tr -d ' ')"

    log_success "VuePress 构建成功"
    log_info "构建目录大小：${dist_size}"
    log_info "构建文件数量：${file_count}"

    # 8. 创建临时部署目录
    TEMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/vuepress-pages.XXXXXX")"

    log_info "创建临时部署目录：${TEMP_DIR}"

    # 9. 复制构建产物
    rsync \
        --archive \
        --delete \
        "${DIST_DIR}/" \
        "${TEMP_DIR}/"

    # GitHub Pages 禁止 Jekyll 处理
    touch "${TEMP_DIR}/.nojekyll"

    # 可选：记录部署信息
    cat > "${TEMP_DIR}/deployment-info.txt" <<EOF
Deployment branch: ${DEPLOY_BRANCH}
Source branch: ${current_branch}
Source commit: $(git rev-parse HEAD)
Build time: $(date '+%Y-%m-%d %H:%M:%S %z')
Node version: $(node --version)
pnpm version: $(pnpm --version)
EOF

    # 10. 在临时目录初始化独立 Git 仓库
    cd "${TEMP_DIR}"

    git init --initial-branch="${DEPLOY_BRANCH}"

    git remote add "${REMOTE_NAME}" "${remote_url}"

    # 使用配置的 Git 身份
    if [[ -n "${DEPLOY_GIT_NAME}" ]]; then
        git config user.name "${DEPLOY_GIT_NAME}"
    fi

    if [[ -n "${DEPLOY_GIT_EMAIL}" ]]; then
        git config user.email "${DEPLOY_GIT_EMAIL}"
    fi

    # 检查 Git 身份
    if ! git config user.name >/dev/null 2>&1; then
        log_error "Git 用户名未配置"
        log_error '请执行：git config --global user.name "你的用户名"'
        exit 1
    fi

    if ! git config user.email >/dev/null 2>&1; then
        log_error "Git 邮箱未配置"
        log_error '请执行：git config --global user.email "你的邮箱"'
        exit 1
    fi

    # 11. 提交静态文件
    git add --all

    git commit -m "${COMMIT_MESSAGE}"

    # 12. 推送到 pages 分支
    if [[ "${FORCE_SINGLE_COMMIT}" == "true" ]]; then
        log_info "强制推送到 ${REMOTE_NAME}/${DEPLOY_BRANCH}"
        log_warning "${DEPLOY_BRANCH} 分支旧的部署提交历史将被覆盖"

        git push \
            --force \
            --set-upstream \
            "${REMOTE_NAME}" \
            "HEAD:refs/heads/${DEPLOY_BRANCH}"
    else
        log_info "尝试保留 ${DEPLOY_BRANCH} 分支提交历史"

        git fetch "${REMOTE_NAME}" "${DEPLOY_BRANCH}" || true

        if git show-ref --verify --quiet \
            "refs/remotes/${REMOTE_NAME}/${DEPLOY_BRANCH}"; then

            git rebase \
                "${REMOTE_NAME}/${DEPLOY_BRANCH}" \
                --strategy-option=theirs
        fi

        git push \
            --set-upstream \
            "${REMOTE_NAME}" \
            "HEAD:refs/heads/${DEPLOY_BRANCH}"
    fi

    log_success "部署完成"
    log_success "构建产物已推送到 GitHub ${DEPLOY_BRANCH} 分支"

    printf '\n'
    log_info "请在 GitHub 仓库中设置："
    printf '  Settings\n'
    printf '  → Pages\n'
    printf '  → Build and deployment\n'
    printf '  → Source: Deploy from a branch\n'
    printf '  → Branch: %s\n' "${DEPLOY_BRANCH}"
    printf '  → Folder: / (root)\n'
}

main "$@"