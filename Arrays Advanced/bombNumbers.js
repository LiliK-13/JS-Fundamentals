function bombNumbers(sequenceNumbers, bombNumber){
    let specialNumber = bombNumber[0]; // 0 индекс число
    let bombPower = bombNumber[1]; // 1 индекс мощность

    while(sequenceNumbers.includes(specialNumber)){
        let index = sequenceNumbers.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if(startIndex < 0){
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequenceNumbers.splice(startIndex, elementsToRemove);
    }
    console.log(sequenceNumbers.reduce((a,b)=> a+b,0))

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])