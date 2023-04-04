function sumDigits(num){
    let result = 0;
    let numAsString = String(num);
    for (let i = 0 ;i < numAsString.length; i++){
        result += Number(numAsString[i]);
    }
 console.log(result)
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)