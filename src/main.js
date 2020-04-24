import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency } from './currency-exchange'

$(document).ready(function(){
  (async () => {
    let currency = new Currency();
    const usdExchange = await currency.usdExchange();
    console.log(usdExchange);

  })();
});