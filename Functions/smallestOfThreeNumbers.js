function smallestOfThreeNumbers(num1, num2, num3){
if(num1<num2 && num1 < num3){
    console.log(num1)
}else if(num2 < num1 && num2 < num3){
    console.log(num2)
}else{
    console.log(num3)
}
}
smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(2, 2, 2)


2 вариант

function smallestOfThreeNumbers(first, second, last){
    let smallestNum = Math.min(first, second, last) // ищем самое маленькое число 
    console.log(smallestNum)

}
smallestOfThreeNumbers(2, 5, 3)
