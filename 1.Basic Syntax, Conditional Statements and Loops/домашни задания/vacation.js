function vacation(num,type,day){
    
  if(type == "Students"){
      if(day == "Friday"){
          if(num >= 30){
              let totalPrice= num * 8.45;
              let SDiscount = totalPrice * 0.15;
              let final = totalPrice - SDiscount;
              console.log(`Total price: ${final.toFixed(2)}`)
          }else{
            let totalPrice= num * 8.45;
              console.log(`Total price: ${totalPrice.toFixed(2)}`)
          }
           }else if(day == "Saturday"){
         if(num >= 30){
            let totalPrice= num * 9.80;
            let SDiscount = totalPrice * 0.15;
            let final = totalPrice - SDiscount;
            console.log(`Total price: ${final.toFixed(2)}`)
         } else{
            let totalPrice= num * 9.80;
              console.log(`Total price: ${totalPrice.toFixed(2)}`)
            }
        }else {
        if(num >= 30){
        let totalPrice= num * 10.46;
        let SDiscount = totalPrice * 0.15;
        let final = totalPrice - SDiscount;
        console.log(`Total price: ${final.toFixed(2)}`)
        } else{
        let totalPrice= num * 10.46;
          console.log(`Total price: ${totalPrice.toFixed(2)}`)
     }
     }
    }else if(type== "Business"){
     if(day == "Friday"){
        if(num >= 100){
            let totalPrice= num * 10.90;
            let BusDiscount = 10;
            let final = totalPrice - BusDiscount;
            console.log(`Total price: ${final.toFixed(2)}`)
        }else{
          let totalPrice= num * 10.90;
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
        }
      }else if(day == "Saturday"){
       if(num >= 30){
          let totalPrice= num * 15.60;
          let BusDiscount = 10;
          let final = totalPrice - BusDiscount;
          console.log(`Total price: ${final.toFixed(2)}`)
       } else{
          let totalPrice= num * 15.60;
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
      }
      }else{
     if(num >= 30){
      let totalPrice= num * 16;
      let BusDiscount = 10;
      let final = totalPrice - BusDiscount;
      console.log(`Total price: ${final.toFixed(2)}`)
      } else{
      let totalPrice= num * 16;
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
       }
     }
    }else{
      if(day == "Friday"){
        if(num >= 10 && num <= 20){
            let totalPrice= num * 15;
            let RegDiscount = totalPrice * 0.05;
            let final = totalPrice - RegDiscount;
            console.log(`Total price: ${final.toFixed(2)}`)
        }else{
          let totalPrice= num * 15;
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
        }
       }else if(day == "Saturday"){
       if(num >= 10 && num <= 20){
          let totalPrice= num * 20;
          let RegDiscount = totalPrice * 0.05;
          let final = totalPrice - RegDiscount;
          console.log(`Total price: ${final.toFixed(2)}`)
       } else{
          let totalPrice= num * 20;
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
      }
     }else{
     if(num >= 10 && num <= 20){
      let totalPrice= num * 22.50;
      let RegDiscount = totalPrice * 0.05;
      let final = totalPrice - RegDiscount;
      console.log(`Total price: ${final.toFixed(2)}`)
       } else{
      let totalPrice= num * 22.50;
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
     }
    }
}
}
vacation(30,"Students","Sunday")
vacation(21,"Business","Saturday")
vacation(30,"Students","Sunday")
vacation(19,"Regular","Saturday")
vacation(30,"Students","Sunday")
vacation(19,"Regular","Saturday")