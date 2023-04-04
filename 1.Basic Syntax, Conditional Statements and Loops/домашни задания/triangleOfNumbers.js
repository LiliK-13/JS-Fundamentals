function triangleOfNumbers (num){
let numbers = " ";

  for(let i= 1; i <=num ; i++){
      numbers = i + " ";
      console.log( numbers.repeat(i))
  }
}
triangleOfNumbers (5)