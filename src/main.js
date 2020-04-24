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
      let result =  rateExchange(userInput, rate);

      $('#output').html(`<p> $${userInput} USD Dollar is Equal to ${result} ${rate}<p>`);


      function rateExchange(userInput, newRate) {
        let num = userInput; 
        let rate = newRate;
        let symbol = ["$", "€", "¥", "฿"]
  

        if (num === 0 || rate === " ") {
          return newRate = "Please fill out form";
        } 
        else if (num > 0 && rate === "CAD") {
          newRate = symbol[0] + (usdExchange.CAD * num).toFixed(2);
        }
        else if (num > 0 && rate === "EUR") {
          newRate = symbol[1] + (usdExchange.EUR * num).toFixed(2); 
        } 
        else if (num > 0 && rate === "JPY") {
          newRate = symbol[2] + (usdExchange.JPY * num).toFixed(2); 
        } 
        else if (num > 0 && rate === "MXN") {
          newRate = symbol[0] + (usdExchange.MXN * num).toFixed(2); 
        } 
        else if (num > 0 && rate === "THB") {
          newRate = symbol[3] + (usdExchange.THB * num).toFixed(2); 
        }
        return newRate.toString();
      }
    })(); 
  });
});