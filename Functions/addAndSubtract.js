//function addAndSubtract(num1, num2, num3){
//let sum = num1 + num2;
//let subtract = sum - num3;
//console.log( subtract)
//}
//addAndSubtract(23, 6, 10)
//addAndSubtract(1, 17, 30)
//addAndSubtract(42, 58, 100)



//2 вариант

function addAndSubtract(numF, numS, numT){
    let sumFAndS = sum(numF, numS);
    let finalResult = subtract(sumFAndS, numT)

console.log (finalResult);

 function sum(numF, numS){
   return numF + numS;
 }
 function subtract(sumFAndS, thNum){
     return sumFAndS - thNum;
 }
}
addAndSubtract(23, 6, 10)