function calculateDateDifference() {
    const dateElements = document.querySelectorAll('.todolist-date');

    dateElements.forEach(function (element) {
        const dateText = element.getAttribute('data-date');
        if (dateText) {
            const createdDate = new Date(dateText);
            const currentDate = new Date();
            const timeDifference = currentDate - createdDate;
            const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // 在 span.date-difference 中显示天数差
            const dateDiffSpan = element.querySelector('.date-difference');
            dateDiffSpan.textContent = `距离创建日期已有：${dayDifference} 天`;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    calculateDateDifference();
});

// PJAX 结束后重新执行日期差计算
document.addEventListener('pjax:complete', function () {
    calculateDateDifference();
});
