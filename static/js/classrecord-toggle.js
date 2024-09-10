document.addEventListener('DOMContentLoaded', function () {
    // 自动折叠所有任务已完成并且 card 不是 false 的卡片
    const classRecordItems = document.querySelectorAll('.classrecord-item');

    classRecordItems.forEach(item => {
        const allCompleted = item.getAttribute('data-all-completed') === 'true';
        const cardControlled = item.getAttribute('data-card') !== 'false'; // card 不是 false 时自动折叠
        const taskList = item.querySelector('ul.classrecord-ul-new');
        const layout = item.getAttribute('data-layout');
        const toggleButton = item.querySelector('.toggle-button-new');
        const arrowIcon = item.querySelector('.arrow-icon-new'); // 文档式折叠框箭头

        // 如果是默认布局
        if (!layout || layout !== 'document') {
            if (allCompleted && cardControlled) {
                taskList.style.display = 'none'; // 自动折叠
                toggleButton.textContent = '展开';
            }
        } else if (layout === 'document') {
            // 初始化文档式折叠框的箭头方向
            if (taskList.style.display === 'none') {
                arrowIcon.textContent = '→'; 
            } else {
                arrowIcon.textContent = '↓'; 
            }
        }
    });
});

// 点击展开/折叠按钮
function toggleCardNew(element) {
    const taskList = element.parentElement.querySelector('ul.classrecord-ul-new');
    const arrowIcon = element.querySelector('.arrow-icon-new'); // 文档式折叠框箭头

    if (taskList.style.display === 'none') {
        taskList.style.display = 'block';
        if (arrowIcon) {
            arrowIcon.textContent = '↓'; // 展开时箭头向下
        }
    } else {
        taskList.style.display = 'none';
        if (arrowIcon) {
            arrowIcon.textContent = '→'; // 折叠时箭头向右
        }
    }
}
