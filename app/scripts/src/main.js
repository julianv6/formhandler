import FormHandler from './formhandler';

var FORM_SELECTOR = '[data-coffee-order="form"]'
var formhandler = new FormHandler(FORM_SELECTOR);

formhandler.addSubmitHandler((data) => {
  console.log(data)
});
