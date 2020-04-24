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
      let newRate = $('#rate').val();
      let userInfo = new UserInfo (userInput, newRate); 
      let result = userInfo.rateExchange() 

      rateExchange() {
        let num = userInput; 
        let rate = newRate;
        let cadRate = usdExchange.CAD * num;
        let eurRate = usdExchange.EUR * num; 
        let jpyRate = usdExchange.JPY * num; 
        let mxnRate = usdExchange.MXN * num; 
        let thbRate = usdExchange.THB * num;
    
        if (num === 0 || rate === " ") {
          return this.newRates = "Please fill out form";
        } else if (num > 0 && rate === "CAD") {
          this.newRate = cadRate; 
        } else if (num > 0 && rate === "EUR") {
          this.newRate = eurRate; 
        } else if (num > 0 && rate === "JPY") {
          this.newRate = jpyRate; 
        } else if (num > 0 && rate === "MXN") {
          this.newRate = mxnRate; 
        } else if (num > 0 && rate === "THB") {
          this.newRate = thbRate; 
        }
      }
      $('#output').append(result)
    })() 
  });
});