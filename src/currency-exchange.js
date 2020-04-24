// Business Logic 
export class Currency {
  async usdExchange() {
    try { 
      let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`)
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        let newRate = jsonifiedResponse.conversion_rates;
        console.log(newRate);
        jsonifiedResponse = newRate;  
      } 
      else {
        jsonifiedResponse = false; 
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log(error) 
      return false
    }
  }
 
}

export class UserInfo extends Currency {
  constructor(userInput) {
    this.userInput = userInput;
  }
  rateExchange() {
    let num = this.userInput; 
    let cadRate = usdExchange.CAD * num;
    let eurRate = usdExchange.EUR * num; 
    let jpyRate = usdExchange.EUR * num; 
    let mxnRate = usdExchange.MXN * num; 
    let thbRate = usdExchange.THB * num;
    this.newRates = [cadRate, eurRate, jpyRate, mxnRate, thbRate]
  }
}

