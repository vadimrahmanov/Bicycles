'use strict';

(function () {
  var navigation = document.querySelector('.navigation');
  var navigationHandler = document.querySelector('.navigation button');
  var navigationList = navigation.querySelector('ul');

  navigationList.classList.add('nav-close');

  navigationHandler.addEventListener('click', function () {
    navigationList.classList.toggle('nav-close');
    navigationList.classList.toggle('nav-opened');
    navigation.classList.toggle('navigation--opened');
    navigationHandler.classList.toggle('nav-btn-opened');
  });

  // eslint-disable-next-line no-undef
  svg4everybody();
})();
