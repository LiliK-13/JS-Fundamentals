function softUniReception(input){
    let emp1Efficiency = Number(input.shift()); // берем 1 число массива
    let emp2Efficiency =  Number(input.shift());//берем 2 число массива
    let emp3Efficiency =  Number(input.shift());//берем 3 число массива
    let peopleCount = Number(input.shift());//берем 4 число массива
    let neededHours = 0; // нужные часы
    let answerPerHours = emp1Efficiency + emp2Efficiency + emp3Efficiency; //обработка вопросов в час

    while(peopleCount > 0){   //если 45 меньше 0
        peopleCount -= answerPerHours; // 45 - 6
        neededHours++ // часы прибавляются по 1 на каждый оборот

        if(neededHours % 4 === 0){ //  если часы равны 4
            neededHours++ // прибавляем еще 1 час
        }
    }

 
    console.log(`Time needed: ${neededHours}h.`)

}
softUniReception(['1','2','3','45'])