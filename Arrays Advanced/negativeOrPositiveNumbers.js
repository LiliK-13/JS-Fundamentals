function negativeOrPositiveNumbers(arr){
    let result = [];

    for(let el of arr){
        el = Number(el);
        if(el < 0){
             result.unshift(el); // ще сложи число отпред

        }else{
            result.push(el) // ще сложи число в края на масив
        }
    }
    console.log(result.join("\n"))
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])