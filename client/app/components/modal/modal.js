import angular from 'angular';
import UIRouter from 'angular-ui-router';
import modalComponent from './modal.component';

let modalModule = angular.module('modal',[
	UIRouter
])

.component('modal',modalComponent)

.name;

export default modalModule;
