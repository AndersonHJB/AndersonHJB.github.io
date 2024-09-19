// anniversary.js

function initializeAnniversary() {
    // 引入农历转换库，利用 Lunar.js 进行农历到阳历的转换
    function lunarToSolar(year, month, day) {
      try {
        const lunarDate = Lunar.fromYmdHms(year, month, day, 0, 0, 0);
        return lunarDate.getSolar();
      } catch (error) {
        console.error('输入的农历日期不正确:', error);
        return null;
      }
    }
  
    // 计算两个日期之间的天数差
    function daysBetween(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000;
      return Math.ceil((date2 - date1) / oneDay);
    }
  
    const countdownElements = document.querySelectorAll('.countdown');
    const totalDaysElements = document.querySelectorAll('.total-days');
  
    countdownElements.forEach(function (elem) {
      const dateStr = elem.getAttribute('data-date');
      const isLunar = elem.getAttribute('data-lunar') === 'true';
      let anniversaryDate;
  
      if (isLunar) {
        const [lunarYear, lunarMonth, lunarDay] = dateStr.split('-').map(Number);
        const now = new Date();
        const currentYear = now.getFullYear();
  
        // 将用户输入的农历日期转换为当前年份的阳历日期
        anniversaryDate = lunarToSolar(currentYear, lunarMonth, lunarDay);
  
        // 如果当前日期已经过了这个阳历日期，计算下一年的农历日期
        if (anniversaryDate) {
          let nextAnniversary = new Date(anniversaryDate.getYear(), anniversaryDate.getMonth() - 1, anniversaryDate.getDay());
          if (nextAnniversary < now) {
            const nextYearSolarDate = lunarToSolar(currentYear + 1, lunarMonth, lunarDay);
            if (nextYearSolarDate) {
              nextAnniversary = new Date(nextYearSolarDate.getYear(), nextYearSolarDate.getMonth() - 1, nextYearSolarDate.getDay());
            }
          }
          anniversaryDate = nextAnniversary;
        }
      } else {
        // 如果是阳历日期，直接获取对应日期
        anniversaryDate = new Date(dateStr);
  
        // 处理阳历情况下的下一年计算
        const now = new Date();
        let nextAnniversary = new Date(now.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate());
        if (nextAnniversary < now) {
          nextAnniversary.setFullYear(now.getFullYear() + 1);
        }
        anniversaryDate = nextAnniversary;
      }
  
      if (anniversaryDate) {
        const now = new Date();
        const daysLeft = daysBetween(now, anniversaryDate);
        elem.textContent = daysLeft;
      } else {
        elem.textContent = '--';
      }
    });
  
    totalDaysElements.forEach(function (elem) {
      const dateStr = elem.getAttribute('data-date');
      const isLunar = elem.getAttribute('data-lunar') === 'true';
      let startDate;
  
      if (isLunar) {
        const [lunarYear, lunarMonth, lunarDay] = dateStr.split('-').map(Number);
        startDate = lunarToSolar(lunarYear, lunarMonth, lunarDay);
      } else {
        startDate = new Date(dateStr);
      }
  
      if (startDate) {
        const now = new Date();
        const totalDays = daysBetween(startDate, now);
        elem.textContent = totalDays;
      } else {
        elem.textContent = '--';
      }
    });
  }
  
  // 初始页面加载
  document.addEventListener('DOMContentLoaded', initializeAnniversary);
  
  // 适配 pjax
  document.addEventListener('pjax:complete', initializeAnniversary);
  