function searchForANumber(arr1, arr2){
    
    let manipulateArray = arr1.slice(0,arr2[0]);
    
    let secindStepWithArray = manipulateArray.splice(0,arr2[1]);
    let numberOfSearch = arr2[2];
    let searchTime = 0;

    for(let i = 0; i< manipulateArray.length; i++){
        if(manipulateArray[i] === numberOfSearch){
            searchTime++
        }

    }




console.log(`Number ${numberOfSearch} occurs ${searchTime} times.`)
}    
searchForANumber([7, 1,5, 8, 2, 7],

    [3, 1, 5])