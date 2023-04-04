function theBiscuitFactory(arr){
    arr = arr.map(Number);
    
    let biscuitsPerDay = arr[0];
    let countOfTheWorkers = arr[1];
    let numberOfBiscuits30Days = arr[2];

    let count = 0;
    let days = 30;
    let thirdDayProduced = 0.75;


    for(i=1; i <= days; i++){
        if(i % 3 == 0){
            count += Math.floor(biscuitsPerDay * countOfTheWorkers * thirdDayProduced);

        }else{
            count += Math.floor(biscuitsPerDay * countOfTheWorkers);
        }
    }
    console.log(`You have produced ${count} biscuits for the past month.`)

    let difference = count - numberOfBiscuits30Days;
    let percent = (difference / numberOfBiscuits30Days) * 100;

    if(count > numberOfBiscuits30Days){
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`)
    }else{
        console.log(`You produce ${Math.abs(percent).toFixed(2)} percent less biscuits.`)
    }
}
//theBiscuitFactory(["78","8","16000"])
theBiscuitFactory(["65", "12", "26000"])
//theBiscuitFactory(["163", "16", "67020"])
