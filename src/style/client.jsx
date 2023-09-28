// const client_carousel = document.querySelector(".client-carousel");
// const client_arrowIcons = document.querySelectorAll(".client-wrapper i");
// const client_firstCardWidth = document.querySelector(".client-wrapper img").offsetWidth;

// let isClientDragging = false, isClientClicking= false, clientStartX, clientStartScrollLeft;

// client_arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         isClientClicking = true;
//         client_carousel.scrollLeft += icon.id === "left" ? -client_firstCardWidth : client_firstCardWidth;
//         const timeout = setTimeout(() => {
//             isClientClicking = false;
//         }, 3000)

//         return () => clearTimeout(timeout());
//     })
// })

// const clientDragging = (e) => {
//     if (!isClientDragging) return;
//     e.preventDefault();
//     client_carousel.scrollLeft = clientStartScrollLeft - (e.pageX - clientStartX);
//     client_carousel.classList.add("dragging");
// }

// const clientDragStart = (e) => {
//     isClientDragging = true;
//     clientStartX = e.pageX;
//     clientStartScrollLeft = client_carousel.scrollLeft
// }

// const clientDragStop = () => {
//     isClientDragging = false;
//     client_carousel.classList.remove("dragging");
// }

// const clientAutoPlay = () => {
//     const interval = setInterval(() => {
//         if (isClientDragging || isClientClicking) return;
//         client_carousel.scrollLeft += client_firstCardWidth;
//         if (Math.ceil(client_carousel.scrollLeft) === client_carousel.scrollWidth - client_carousel.offsetWidth) {
//             client_carousel.classList.add("no-transition");
//             client_carousel.scrollLeft = 0;
//             client_carousel.classList.remove("no-transition");
//         };
//     }, 2000);

//     return () => clearInterval(interval);
// };

// onload = clientAutoPlay;

// // const infiniteScroll = () => {
// //     if (client_carousel.scrollLeft === 0) {
// //         client_carousel.scrollLeft = client_carousel.scrollWidth - (2 * client_carousel.offsetWidth);
// //     }else if (Math.ceil(client_carousel.scrollLeft) === client_carousel.scrollWidth - client_carousel.offsetWidth) {
// //         client_carousel.scrollLeft = client_carousel.offsetWidth;
// //     }
// // }

// client_carousel.addEventListener("mouseup", clientDragStop);
// client_carousel.addEventListener("mousedown", clientDragStart);
// client_carousel.addEventListener("mousemove", clientDragging);
// // client_carousel.addEventListener("scroll", infiniteScroll);






const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

// Toggle dropdown when the button is clicked
dropdownButton.addEventListener('click', () => {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

// Close the dropdown when clicking anywhere on the screen
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});




$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});