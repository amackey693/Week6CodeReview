// Business Logic 
export class Currency {
  async usdExchange() {
    try { 
      let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`)
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        let allRates = jsonifiedResponse.conversion_rates;
        jsonifiedResponse = allRates;
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

// export class UserInfo extends Currency {
//   static constructor(userInput, selectedRate) {
//     this.userInput = userInput;
//     this.selectedRate = selectedRate; 
//   }
//   static rateExchange() {
//     let num = this.userInput; 
//     let rate = this.selectedRate; 
//     let cadRate = usdExchange.CAD * num;
//     let eurRate = usdExchange.EUR * num; 
//     let jpyRate = usdExchange.JPY * num; 
//     let mxnRate = usdExchange.MXN * num; 
//     let thbRate = usdExchange.THB * num;

//     if (num === 0 || rate === " ") {
//       return this.newRates = "Please fill out form";
//     } else if (num > 0 && rate === "CAD") {
//       this.newRate = cadRate; 
//     } else if (num > 0 && rate === "EUR") {
//       this.newRate = eurRate; 
//     } else if (num > 0 && rate === "JPY") {
//       this.newRate = jpyRate; 
//     } else if (num > 0 && rate === "MXN") {
//       this.newRate = mxnRate; 
//     } else if (num > 0 && rate === "THB") {
//       this.newRate = thbRate; 
//     }
//     return this.newRate; 
//   }
// }

