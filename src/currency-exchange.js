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



