// anniversary.js

// 在使用前确保引入了 canvas-confetti 库
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

function initializeAnniversary() {
    function LunarDate(Year, Month, Day) {
        try {
            let solar = Lunar.fromYmdHms(Year, Month, Day, 0, 0, 0).getSolar();
            return new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay());
        } catch (error) {
            return LunarDate(Year, Month, Day - 1);
        }
    }
    // 计算两个日期之间的天数差
    function daysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.floor((date2 - date1) / oneDay);
    }
    // 计算两个日期之间的周数和天数差
    function weeksAndDaysBetween(date1, date2) {
        const totalDays = daysBetween(date1, date2);
        const weeks = Math.floor(totalDays / 7);
        const days = totalDays % 7;
        return { weeks, days };
    }
    // 计算两个日期之间的月数和天数差
    function monthsAndDaysBetween(date1, date2) {
        let years = date2.getFullYear() - date1.getFullYear();
        let months = date2.getMonth() - date1.getMonth() + years * 12;
        let days = date2.getDate() - date1.getDate();

        if (days < 0) {
            months -= 1;
            let previousMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
            days += previousMonth.getDate();
        }

        return { months, days };
    }
    // 剩余天数
    function daysLeft(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        return daysBetween(now, anniversaryDate);
    }
    // 经过天数
    function totalDays(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let startDate;
        if (isLunar) {
            startDate = LunarDate(Year, Month, Day);
        } else {
            startDate = new Date(Year, Month - 1, Day);
        }
        return daysBetween(startDate, now);
    }
    // 返回目标或起始日期以及星期几
    function targetDate(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        // 获取星期几
        const weekDay = anniversaryDate.toLocaleDateString('zh-CN', { weekday: 'long' });
        // 返回年月日加星期几
        const year = anniversaryDate.getFullYear();
        const month = (anniversaryDate.getMonth() + 1).toString().padStart(2, '0');
        const day = anniversaryDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day} (${weekDay})`;
    }
    // 返回目标或起始日期（根据 displayMode）
    function targetOrStartDate(dateStr, isLunar, displayMode) {
        if (displayMode === "elapsed") {
            return dateStr;
        } else {
            return targetDate(dateStr, isLunar);
        }
    }

    const countdownElements = document.querySelectorAll(".countdown");
    let todayAnniversaries = []; // 用于收集今天的纪念日名称

    countdownElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        const displayMode = elem.getAttribute("data-display-mode");
        const card = elem.closest('.anniversary-card'); // 获取对应的卡片元素
        const name = card.getAttribute('data-name'); // 获取纪念日名称

        if (displayMode === "elapsed") {
            elem.dataset.displayState = '0';
            updateElapsedDisplay(elem, dateStr, isLunar, 0);
            elem.addEventListener('click', function () {
                let currentState = parseInt(elem.dataset.displayState);
                currentState = (currentState + 1) % 3;
                elem.dataset.displayState = currentState.toString();
                updateElapsedDisplay(elem, dateStr, isLunar, currentState);
            });

            // 检查是否是纪念日当天
            if (isTodayAnniversary(dateStr, isLunar)) {
                // 对卡片添加烟花效果
                triggerFireworks(card);
                // 收集今天的纪念日名称
                todayAnniversaries.push(name);
            }
        } else {
            let daysText = daysLeft(dateStr, isLunar);
            elem.textContent = daysText;
            elem.nextElementSibling.textContent = "天后";

            // 如果倒计时为0天，表示纪念日当天
            if (parseInt(daysText) === 0) {
                // 对卡片添加烟花效果
                triggerFireworks(card);
                // 收集今天的纪念日名称
                todayAnniversaries.push(name);
            }
        }
    });

    if (todayAnniversaries.length > 0) {
        // 显示横幅通知
        showAnniversaryBanner(todayAnniversaries);
    }

    // 更新elapsed模式下的显示内容
    function updateElapsedDisplay(elem, dateStr, isLunar, displayState) {
        if (displayState === 0) {
            let days = totalDays(dateStr, isLunar);
            elem.textContent = days;
            elem.nextElementSibling.textContent = "天了";
        } else if (displayState === 1) {
            const [Year, Month, Day] = dateStr.split("-").map(Number);
            let now = new Date();
            now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let startDate;
            if (isLunar) {
                startDate = LunarDate(Year, Month, Day);
            } else {
                startDate = new Date(Year, Month - 1, Day);
            }

            let { weeks, days } = weeksAndDaysBetween(startDate, now);
            if (days === 0) {
                elem.textContent = weeks;
                elem.nextElementSibling.textContent = "周了";
            } else {
                elem.textContent = `${weeks}周${days}天`;
                elem.nextElementSibling.textContent = "了";
            }
        } else if (displayState === 2) {
            const [Year, Month, Day] = dateStr.split("-").map(Number);
            let now = new Date();
            now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let startDate;
            if (isLunar) {
                startDate = LunarDate(Year, Month, Day);
            } else {
                startDate = new Date(Year, Month - 1, Day);
            }

            let { months, days } = monthsAndDaysBetween(startDate, now);
            elem.textContent = `${months}月${days}天`;
            elem.nextElementSibling.textContent = "了";
        }
    }

    // 显示目标或起始日期
    const targetDateElements = document.querySelectorAll(".target-date");
    targetDateElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        const displayMode = elem.getAttribute("data-display-mode");
        elem.textContent = targetOrStartDate(dateStr, isLunar, displayMode);
    });

    // 判断今天是否是纪念日
    function isTodayAnniversary(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (isLunar) {
            let lunarToday = Lunar.fromDate(now);
            return lunarToday.getMonth() === Month && lunarToday.getDay() === Day;
        } else {
            return (now.getMonth() + 1) === Month && now.getDate() === Day;
        }
    }

    // 显示横幅通知
    function showAnniversaryBanner(names) {
        const banner = document.createElement('div');
        banner.className = 'anniversary-banner';
        banner.innerHTML = `
            <div class="banner-content">
                <span>今天是 ${names.join('、')} 纪念日</span>
                <button class="close-button">&times;</button>
            </div>
        `;
        document.body.appendChild(banner);

        // 关闭按钮事件
        banner.querySelector('.close-button').addEventListener('click', function() {
            banner.style.display = 'none';
        });

        // 10 秒后自动关闭
        setTimeout(function() {
            banner.style.display = 'none';
        }, 10000);
    }

    // 触发烟花效果
    function triggerFireworks(element) {
        var rect = element.getBoundingClientRect();
        var x = rect.left + rect.width / 2;
        var y = rect.top + rect.height / 2;

        // 调整为窗口坐标的比例
        var xRatio = x / window.innerWidth;
        var yRatio = y / window.innerHeight;

        var duration = 2 * 1000; // 2秒
        var animationEnd = Date.now() + duration;

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) return;

            var ticks = Math.max(200, 500 * (timeLeft / duration));

            confetti({
                particleCount: 5,
                startVelocity: 30,
                ticks: ticks,
                origin: {
                    x: xRatio,
                    y: yRatio
                },
                colors: ['#ffae00', '#ff4500', '#ff69b4', '#ba55d3', '#1e90ff'],
                shapes: ['circle', 'square'],
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            });

            requestAnimationFrame(frame);
        })();
    }
}

// 初始页面加载
document.addEventListener("DOMContentLoaded", initializeAnniversary);

// 适配 pjax
document.addEventListener("pjax:complete", initializeAnniversary);