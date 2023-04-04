function multiplicationTable(num){

let numbers = " ";
 for (let i = 1; i<= 10; i++){
    let sum = num * i;
     numbers = i + " ";
     console.log(`${num} X ${i} = ${sum}`)
 }
}
multiplicationTable(5)