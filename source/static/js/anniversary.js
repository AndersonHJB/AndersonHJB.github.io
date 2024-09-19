// anniversary.js

function initializeAnniversary() {
    // 引入农历转换库，利用 Lunar.js 进行农历到阳历的转换
    function lunarToSolar(lunarDateStr, year) {
      const [lunarYear, lunarMonth, lunarDay] = lunarDateStr.split('-').map(Number);
    //   const solarDate = Lunar.fromYmd(year, lunarMonth, lunarDay).getSolar();
      const solarDate = Lunar.fromYmdHms(year, lunarMonth, lunarDay, 0, 0, 0).getSolar();
      return new Date(solarDate.getYear(), solarDate.getMonth() - 1, solarDate.getDay());
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
        // 将农历日期转换为当前年份对应的阳历日期
        const now = new Date();
        anniversaryDate = lunarToSolar(dateStr, now.getFullYear());
  
        // 如果当前日期已经过了转换后的日期，计算下一年的农历日期
        if (anniversaryDate < now) {
          anniversaryDate = lunarToSolar(dateStr, now.getFullYear() + 1);
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
  
      const now = new Date();
      const daysLeft = daysBetween(now, anniversaryDate);
      elem.textContent = daysLeft;
    });
  
    totalDaysElements.forEach(function (elem) {
      const dateStr = elem.getAttribute('data-date');
      const isLunar = elem.getAttribute('data-lunar') === 'true';
      let startDate;
  
      if (isLunar) {
        // 将农历日期转换为开始年份对应的阳历日期
        const lunarYear = parseInt(dateStr.split('-')[0], 10);
        startDate = lunarToSolar(dateStr, lunarYear);
      } else {
        startDate = new Date(dateStr);
      }
  
      const now = new Date();
      const totalDays = daysBetween(startDate, now);
      elem.textContent = totalDays;
    });
  }
  
  // 初始页面加载
  document.addEventListener('DOMContentLoaded', initializeAnniversary);
  
  // 适配 pjax
  document.addEventListener('pjax:complete', initializeAnniversary);
  