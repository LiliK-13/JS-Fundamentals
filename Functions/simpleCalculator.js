//function simpleCalculator(x,y, op){
//let res;

//switch(op){
 //   case 'multiply': res = x * y; break;
  //  case 'divide': res = x / y; break;
   // case 'add': res = x + y; break;        1 вариант
   // case 'subtract': res = x - y; break;
//}
//console.log(res)
//}
//simpleCalculator(5,5,'multiply')

function simpleCalculator(x,y, op){
let res;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
switch(op){
    case 'multiply': res = multiply(x, y); break;
    case 'divide': res = divide(x, y); break;
    case 'add': res = add(x, y); break;      
    case 'subtract': res = subtract(x, y); break;
}
console.log(res)
}
simpleCalculator(5,5,'multiply')
