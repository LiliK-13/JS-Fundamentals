function perfectNumber(number){
    let sumOfDivisors = 1;

    for(let currentNumber = 2; currentNumber < number; currentNumber++){
        if(number % currentNumber === 0){
            sumOfDivisors += currentNumber;
        }
    }

    if(sumOfDivisors === number){                  // или let result = (sumOfDivisors === number) ?
        console.log("We have a perfect number!")   // "We have a perfect number!" : "It's not so perfect."
    }else{                                         // console.log(result);
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)