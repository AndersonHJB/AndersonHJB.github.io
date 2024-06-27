#!/bin/bash
echo -e "--------------------------常用服务端口-------------------------------"
echo -e "\e[33mNginx/Apache服务默认端口:80\nMysql服务默认端口:3306\n宝塔面板默认端口:8888\nPhpMyAdmin服务默认端口:888\e[0m"
echo -e "\e[33mRedis服务默认端口:6379\n邮局服务默认端口:25\nSSH服务默认端口:22\nMemcached服务默认端口:11211\e[0m"
echo -e '--------------------------------------------------------------------'
read -p "输入需要检测的端口：" port

Install_tcping(){
        if [ -f "/usr/bin/yum" ] && [ -d "/etc/yum.repos.d" ]; then
                PM="yum"
        elif [ -f "/usr/bin/apt-get" ] && [ -f "/usr/bin/dpkg" ]; then
                PM="apt-get"
        fi

        if [ "${PM}" = "yum" ];then
            echo -e '--------------------------------------------------------------------'
            echo -e '正在安装Tcping检测命令'
            sleep 1
            Pack="tcping"
            ${PM} install ${Pack} -y >>/dev/null
        fi

    if [ "${PM}" = "apt-get" ];then
        echo -e '--------------------------------------------------------------------'
        echo -e '正在安装Tcping检测命令....'
        sleep 1
        Pack="tcptraceroute"
        ${PM} install ${Pack} -y >>/dev/null
        wget http://www.vdberg.org/~richard/tcpping -O /usr/bin/tcping
        chmod 755 /usr/bin/tcping
    fi
}

check_port(){
    pid=$(lsof -i:$port | awk '{print $2}' | sed -n '2p')
    if [ "$pid" != "" ];then
        echo -e '--------------------------------------------------------------------'
        echo -e "|------正在检测$port端口使用状态"
        sleep 2
        echo -e "|--端口监听正常，已被进程PID:$pid使用"
        sleep 1
    else
        echo -e '--------------------------------------------------------------------'
        echo -e "|------正在检测$port端口使用状态"
        echo -e "|--Port：$port端口未被使用,请核实运行服务使用端口是否正确."
        echo -e '--------------------------------------------------------------------'
        exit 0
	fi
}

tcping_status(){
    ip=$(curl -sS --connect-timeout 10 -m 60 https://www.bt.cn/Api/getIpAddress -4)
        echo -e '--------------------------------------------------------------------'
        echo -e '|------准备检测外网访问'
        sleep 2
        echo -e '|------正在检测外网访问(检测需要一些时间)...'
    port_status=`tcping $ip $port`
    if [[ $port_status =~ "closed" ]];then
        echo -e "|--Port：$port 端口外网无法访问"
        echo -e '--------------------------------------------------------------------'
        echo -e "\e[33m1.外网无法访问端口，确保端口是被所运行的服务监听使用。\e[0m"
        echo -e "\e[33m2.请确保系统防火墙是否放行，可通过宝塔面板---安全---放行端口。\e[0m"
        echo -e "\e[33m3.检查服务器运营商安全组是否放行，请参考下面帖子放行。\e[0m"
        echo -e "\e[33m腾讯云：https://www.bt.cn/bbs/thread-1229-1-1.html\e[0m"
        echo -e "\e[33m阿里云：https://www.bt.cn/bbs/thread-2897-1-1.html\e[0m"
        echo -e "\e[33m华为云：https://www.bt.cn/bbs/thread-3923-1-1.html\e[0m"
        echo -e "\e[33m|--检测完成....\e[0m"
        echo -e '--------------------------------------------------------------------'
    else
        echo -e "|--Port：$port端口外网正常访问"
        sleep 1
        echo -e "|--检测完成...."
        echo -e '--------------------------------------------------------------------'
    fi
}

Install_tcping
check_port
tcping_status