document.addEventListener('DOMContentLoaded', function () {
    // 自动折叠所有任务已完成并且 card 不是 false 的卡片
    const todoItems = document.querySelectorAll('.todolist-item');

    todoItems.forEach(item => {
        const allCompleted = item.getAttribute('data-all-completed') === 'true';
        const cardControlled = item.getAttribute('data-card') !== 'false'; // card 不是 false 时自动折叠
        const taskList = item.querySelector('ul.todolist-ul');
        const toggleButton = item.querySelector('.toggle-button');

        if (allCompleted && cardControlled) {
            taskList.style.display = 'none'; // 自动折叠
            toggleButton.textContent = '展开';
        }
    });
});

// 点击展开/折叠按钮
function toggleCard(button) {
    const taskList = button.parentElement.querySelector('ul.todolist-ul');
    if (taskList.style.display === 'none') {
        taskList.style.display = 'block';
        button.textContent = '折叠';
    } else {
        taskList.style.display = 'none';
        button.textContent = '展开';
    }
}
