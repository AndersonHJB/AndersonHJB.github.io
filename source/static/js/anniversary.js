// anniversary.js

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
      return Math.ceil((date2 - date1) / oneDay);
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
  
    const countdownElements = document.querySelectorAll(".countdown");
    const totalDaysElements = document.querySelectorAll(".total-days");
  
    countdownElements.forEach(function (elem) {
      const dateStr = elem.getAttribute("data-date");
      const isLunar = elem.hasAttribute("data-lunar");
      elem.textContent = daysLeft(dateStr, isLunar);
    });
  
    totalDaysElements.forEach(function (elem) {
      const dateStr = elem.getAttribute("data-date");
      const isLunar = elem.hasAttribute("data-lunar");
      elem.textContent = totalDays(dateStr, isLunar);
    });
  }
  
  // 初始页面加载
  document.addEventListener("DOMContentLoaded", initializeAnniversary);
  
  // 适配 pjax
  document.addEventListener("pjax:complete", initializeAnniversary);
  