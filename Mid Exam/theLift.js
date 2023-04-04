function theLift(array){
    let peopleAreWaiting = Number(array.shift()); // 15 вырезает 1 элемент
    let currentStateOfTheLift = array.shift().split(' '); // создакт массив [0, 0, 0, 0, 0]
    let wagonSpaceCount = 0;
     
    for(i = 0; i < currentStateOfTheLift.length; i ++){
       let  currWagons= Number(currentStateOfTheLift[i])
        if (currWagons < 4){
            if(peopleAreWaiting >=4){
                if(currWagons != 0){
                    peopleAreWaiting -= (4-currWagons);
                    currWagons = 4;
                    currentStateOfTheLift[i]=currWagons;
                    emptySpots = false;
                }else{
                    currWagons = 4;
                    peopleAreWaiting -= currWagons;
                    currentStateOfTheLift[i]=currWagons;
                }
            }else{
                currWagons += peopleAreWaiting;
                peopleAreWaiting = 0;
                currentStateOfTheLift[i]=currWagons;
                emptySpots=true
            }
        }
    }
    if(peopleAreWaiting != 0){
        console.log(`There isn't enough space! ${peopleAreWaiting} people in a queue!`);
        console.log(currentStateOfTheLift.join(' '))
    }else{
        for(let wagon of currentStateOfTheLift){
            if(wagon === 4){
                wagonSpaceCount++;
            }
        }
        if(wagonSpaceCount != currentStateOfTheLift.length){
            console.log("The lift has empty spots!");
            console.log(`${currentStateOfTheLift.join(' ')}`)
        }else{
            console.log(`${currentStateOfTheLift.join(' ')}`)
        }
    }
}
theLift(["15", "0 0 0 0 0"])
//theLift(["20","0 2 0"])