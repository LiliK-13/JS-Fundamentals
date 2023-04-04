function train(arr){
    let passengersInTrainArray = arr.shift().split(' ').map(Number);
    let maxCapacity = +arr.shift(); // + равен Number

    for(let i = 0; i < arr.length; i++){
        let commandNum = arr[i].split(' ');
        if(commandNum[0] === 'Add'){
            passengersInTrainArray.push(Number(commandNum[1]));
        }else{
            for(let a = 0; a < passengersInTrainArray.length; a++){
                if(Number (commandNum[0]) + passengersInTrainArray[a] <= maxCapacity){
                    passengersInTrainArray[a]+= Number(commandNum[0]);
                    break
                }
            }
        }

    }
console.log(passengersInTrainArray.join(' '))
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])