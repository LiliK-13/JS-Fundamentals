function sumFirstAndLastArrayElements(numbers){
    let first = numbers[0];
    let lastIndex = numbers.length-1;
    let last = numbers[lastIndex]
    
    console.log(first + last)
}
sumFirstAndLastArrayElements([20, 30, 40])
sumFirstAndLastArrayElements([10,17,22,33])
sumFirstAndLastArrayElements([11,58,69])