'use strict';

(function () {
  var header = document.querySelector('header');
  var navigation = document.querySelector('.navigation');
  var body = document.querySelector('body');
  var menuItem = navigation.querySelectorAll('a');

  if (header.contains(navigation)) {
    var navigationHandler = document.querySelector('.navigation button');
    var navigationList = navigation.querySelector('ul');

    navigationList.classList.add('nav-close');

    navigationHandler.addEventListener('click', function () {
      navigationList.classList.toggle('nav-close');
      navigationList.classList.toggle('nav-opened');
      navigation.classList.toggle('navigation--opened');
      navigationHandler.classList.toggle('nav-btn-opened');
      body.classList.toggle('nav-opened');
    });

    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].addEventListener('click', function () {
        body.classList.remove('nav-opened');
        navigationList.classList.add('nav-close');
        navigationHandler.classList.remove('nav-btn-opened');
      });
    }
  }

  // eslint-disable-next-line no-undef
  svg4everybody();
})();
