import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency } from './currency-exchange';

 

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    (async () => {
      let currency = new Currency();
      const usdExchange = await currency.usdExchange(); 
      let userInput = parseInt($('#insert-rate').val());
      let rate = $('#rate').val();
      let result = rateExchange(userInput, rate);

      $('#output').html(`<p> $${userInput} USD Dollar is Equal to ${result} ${rate}<p>`);


      function rateExchange(userInput, newRate) {
        let num = userInput; 
        let rate = newRate;
        let cadRate = usdExchange.CAD * num;
        let eurRate = usdExchange.EUR * num; 
        let jpyRate = usdExchange.JPY * num; 
        let mxnRate = usdExchange.MXN * num; 
        let thbRate = usdExchange.THB * num;

        if (num === 0 || rate === " ") {
          return newRate = "Please fill out form";
        } else if (num > 0 && rate === "CAD") {
          newRate = cadRate.toFixed(2);
        } else if (num > 0 && rate === "EUR") {
          newRate = eurRate.toFixed(2); 
        } else if (num > 0 && rate === "JPY") {
          newRate = jpyRate.toFixed(2); 
        } else if (num > 0 && rate === "MXN") {
          newRate = mxnRate.toFixed(2); 
        } else if (num > 0 && rate === "THB") {
          newRate = thbRate.toFixed(2); 
        }
        return newRate; 
      }
    })(); 
  });
});