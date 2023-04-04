function vacation(people, type, day) {
    let priceForOne = 0;
   
    if (day === 'Friday') {
      if (type === 'Students') {
        priceForOne = 8.45;
      } else if (type === 'Business') {
        priceForOne = 10.90;
      } else if (type === 'Regular') {
        priceForOne = 15;
      }
    } else if (day === 'Saturday') {
      if (type === 'Students') {
        priceForOne = 9.80;
      } else if (type === 'Business') {
        priceForOne = 15.60;
      } else if (type === 'Regular') {
        priceForOne = 20;
      }
    } else if (day === 'Sunday') {
      if (type === 'Students') {
        priceForOne = 10.46;
      } else if (type === 'Business') {
        priceForOne = 16;
      } else if (type === 'Regular') {
        priceForOne = 22.50;
      }
    }
   
    if (people >= 30 && type === 'Students') {
      priceForOne *= 0.85;
    } else if (people >= 100 && type === 'Business') {
      group -= 10;
    } else if (type === 'Regular' && people >= 10 && people <= 20) {
      priceForOne *= 0.95;
    }
   
    let totalPrice = priceForOne * people;
   
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }
  vacation(30,"Students","Sunday")
  vacation(21,"Business","Saturday")
  vacation(30,"Students","Sunday")