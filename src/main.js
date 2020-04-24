import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, UserInfo } from './currency-exchange'

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    (async () => {
      let currency = new Currency();
      const usdExchange = await currency.usdExchange();
      console.log(usdExchange);    
      
      let userInput = parseInt($('#insert-rate').val());
      let rate = $('#rate').val();
      let result = rateExchange(userInput, rate);

      $('#output').append(result)
    })() 
  });
});