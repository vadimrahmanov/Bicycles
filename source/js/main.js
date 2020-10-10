'use strict';

var navigationHandler = document.querySelector('.navigation__button');
var navigation = document.querySelector('.navigation__list');

navigation.classList.add('navigation__list--close');

navigationHandler.addEventListener('click', function () {
  navigation.classList.toggle('navigation__list--close');
  navigationHandler.classList.toggle('navigation__button--opened');
});
