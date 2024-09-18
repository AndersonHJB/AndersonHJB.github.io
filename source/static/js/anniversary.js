// anniversary.js

function initializeAnniversary() {
    // 引入农历转换库，利用 Lunar.js 进行农历到阳历的转换
    function lunarToSolar(lunarDateStr) {
      const [year, month, day] = lunarDateStr.split('-').map(Number);
      const solarDate = Lunar.fromYmd(year, month, day).getSolar();
      return new Date(solarDate.getYear(), solarDate.getMonth() - 1, solarDate.getDay());
    }
  
    // 计算两个日期之间的天数差
    function daysBetween(date1, date2) {
      const oneDay = 24 * 60 * 60 * 1000;
      return Math.floor((date2 - date1) / oneDay);
    }
  
    const countdownElements = document.querySelectorAll('.countdown');
    const totalDaysElements = document.querySelectorAll('.total-days');
  
    countdownElements.forEach(function (elem) {
      const dateStr = elem.getAttribute('data-date');
      const isLunar = elem.getAttribute('data-lunar') === 'true';
      let anniversaryDate;
  
      if (isLunar) {
        anniversaryDate = lunarToSolar(dateStr);
      } else {
        anniversaryDate = new Date(dateStr);
      }
  
      const now = new Date();
      let nextAnniversary = new Date(now.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate());
  
      if (nextAnniversary < now) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
      }
  
      const daysLeft = daysBetween(now, nextAnniversary);
      elem.textContent = daysLeft;
    });
  
    totalDaysElements.forEach(function (elem) {
      const dateStr = elem.getAttribute('data-date');
      const isLunar = elem.getAttribute('data-lunar') === 'true';
      let startDate;
  
      if (isLunar) {
        startDate = lunarToSolar(dateStr);
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
  