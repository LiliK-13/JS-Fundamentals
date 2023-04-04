function sumFirstAndLast(arr){
let firstElement = arr.shift(); //берет 1 елемент и сохраняет его
let lastElement =  arr.pop(); // берет 2 елемент и сохраняет его

console.log(Number(firstElement)+Number(lastElement));
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])