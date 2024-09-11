function calculateDateDifferenceNew() {
    const dateElements = document.querySelectorAll('.classrecord-date-new');

    dateElements.forEach(function (element) {
        const dateText = element.getAttribute('data-date');
        if (dateText) {
            const createdDate = new Date(dateText);
            const currentDate = new Date();
            const timeDifference = currentDate - createdDate;
            const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // 在 span.date-difference 中显示天数差
            const dateDiffSpan = element.querySelector('.date-difference-new');
            dateDiffSpan.textContent = `距离上次课已有：${dayDifference} 天`;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    calculateDateDifferenceNew();
});

// PJAX 结束后重新执行日期差计算
document.addEventListener('pjax:complete', function () {
    calculateDateDifferenceNew();
});
