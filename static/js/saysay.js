// document.addEventListener('DOMContentLoaded', () => {
//     const tabButtons = document.querySelectorAll('.tab-button');
//     const tabContents = document.querySelectorAll('.say-item');
  
//     tabButtons.forEach((button) => {
//       button.addEventListener('click', () => {
//         const group = button.getAttribute('data-group');
//         const index = button.getAttribute('data-index');
  
//         // 切换按钮激活状态
//         document
//           .querySelectorAll(`.tab-button[data-group="${group}"]`)
//           .forEach((btn) => btn.classList.remove('active'));
//         button.classList.add('active');
  
//         // 切换内容显示状态
//         document
//           .querySelectorAll(`.say-item[data-group="${group}"]`)
//           .forEach((content) => content.classList.remove('active'));
//         document
//           .querySelector(`.say-item[data-group="${group}"][data-index="${index}"]`)
//           .classList.add('active');
//       });
//     });
//   });
  