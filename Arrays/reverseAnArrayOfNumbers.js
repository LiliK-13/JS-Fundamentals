function reverseAnArrayOfNumbers(n,arr){
    let slice = [];
    for (let i = 0; i < n; i++){
        slice.push(arr[i]);
    }
    let result = ''; // let result = []
    for(let i = slice.length - 1; i >= 0; i--){
        result += slice[i] // нет ряда
        result += ' '; // result.push(slice[i])
    }
    console.log(result);// console.log(result.join(' ')) 

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])

// 2 РЕШЕНИЕ
// function reverse(n, arr){
// let result = [];
// for ( let i = n - 1; i >= 0; i--){
//     result.push(arr[i]);    
// }    
// console.log(result.join(' '));
// }

