//создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменныую в которую положим меню
let menu = document.querySelector('.sidebar')
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    //отменяем стандартное поведение ссылки
  event.preventDefault();
  //вешаем класс на меню
  menu.classList.toggle('visible')
})