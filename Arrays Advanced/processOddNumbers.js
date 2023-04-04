function processOddNumbers(numbers){
    let filterElements = numbers.filter((el, i)=> i % 2 == 1);
    let doubledNum = filterElements.map(x => x * 2);

    
    let reversedNum = doubledNum.reverse();
    console.log(reversedNum.join(' '))
    
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])