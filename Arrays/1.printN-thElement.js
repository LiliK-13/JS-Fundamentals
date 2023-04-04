function printNThElement(array){
        let lastNum = array.pop(); // pop удаляет последий эдемент массива 
        let resultArr = []; //новый массив
        for (let i in array) { // проходим по всему массиву
            if (i % lastNum === 0) { //  если i  деленная на 2 равно 0
                resultArr.push(array[i]); //  добавляем в рузультат 
            }
        }
        console.log(resultArr.join(' '));
    
}
//printNThElement(['5', '20', '31', '4', '20', '2']);
printNThElement(['dsa', 'asd', 'test', 'test', '2'])