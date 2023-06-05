const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
function toggleAccordion(element) {
  var accordionItem = element.parentNode;
  var accordionContent = accordionItem.querySelector(".accordion-content");
  accordionContent.classList.toggle("active");
}

// Вимкнути горизонтальну прокрутку
function disableHorizontalScroll() {
  // Запам'ятати поточне положення прокрутки
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Встановити стиль body, щоб блокувати горизонтальну прокрутку
  document.body.style.overflowX = "hidden";

  // Встановити положення прокрутки на початкове значення
  window.scrollTo(scrollLeft, 0);
}

// Включити горизонтальну прокрутку
function enableHorizontalScroll() {
  // Відновити стиль body для дозволу горизонтальної прокрутки
  document.body.style.overflowX = "auto";
}
enableHorizontalScroll();