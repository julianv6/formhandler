'use strict';
import FormHandler from './formhandler';

var FORM_SELECTOR = '[data-coffee-order="form"]';
var App = window.App;
var Truck = App.Truck;
var DataStore = App.DataStore;
var myTruck = new Truck('ncc-1701', new DataStore());
window.myTruck = myTruck;
var formHandler = new FormHandler(FORM_SELECTOR);

formHandler.addSubmitHandler((data) => {
  return myTruck.createOrder(data);
});
console.log(formHandler);
