import angular from 'angular';
import Home from './home/home';
import Modal from './modal/modal';

let componentModule = angular.module('app.components', [
  Home
])

.name;

export default componentModule;
