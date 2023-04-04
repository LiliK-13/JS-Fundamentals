function computerStore(arr){
   let clientType = arr.pop();
   let totalPriceBeforTaxes= 0;
   let finalPrice = 0;
   
   for(let i = 0; i < arr.length ; i++){
      arr[i] = Number(arr[i])
   }
   for(let num of arr){
     if(num > 0){
         totalPriceBeforTaxes+=num
     }else{
      console.log('Invalid price!')
     }
   }
   
   if(clientType !== "special"){
      finalPrice = totalPriceBeforTaxes + (totalPriceBeforTaxes * 0.2);
   }else{
      let discount = 0.1;
      finalPrice = (totalPriceBeforTaxes +(totalPriceBeforTaxes * 0.2)) - ((totalPriceBeforTaxes +(totalPriceBeforTaxes * 0.2))* discount)
   } 
 
   if (finalPrice > 0) {
   console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPriceBeforTaxes.toFixed(2)}$
Taxes: ${(totalPriceBeforTaxes * 0.2).toFixed(2)}$`);
   console.log("-----------")
   console.log(`Total price: ${finalPrice.toFixed(2)}$`)
   } else {
     console.log('Invalid order!')
   }
}
//computerStore(['1050', '200', '450','2', '18.50', '16.86','special'])
//computerStore(['regular'])
computerStore(['1023',  '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
   
   
   