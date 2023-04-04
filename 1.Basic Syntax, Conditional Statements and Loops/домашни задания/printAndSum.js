function printAndSum(numStart, numEnd){
    let sum= 0;
    let numbers = " ";
   for(let i = numStart; i <= numEnd; i ++){
       numbers += i + " ";// пишет числа в ряд через пробел
       sum += i; // плюсует все выданные числа
   }
   console.log(`${numbers}\nSum: ${sum}`);
}
printAndSum(5,10)
