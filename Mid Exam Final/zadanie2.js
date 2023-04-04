function coffeeLover (input){
    let namesOfTheCoffees = input.shift().split(' ');
    let numberOfCommand = Number(input.shift());
    
    for(let i = 0; i < numberOfCommand; i++){
        let actions = input[i].split(' ');
        let command = actions[0]

        if(command === 'Include'){
            let coffee = actions[1];
            namesOfTheCoffees.push(coffee)
        }else if(command === 'Remove'){
            let positionOfCoffee = actions[1];
            let coffeeNum = actions[2];
            if(positionOfCoffee === 'first'){
                namesOfTheCoffees.splice(0, coffeeNum)
            }else{
                namesOfTheCoffees.splice(-coffeeNum)
                
            }
            if(namesOfTheCoffees.length <= coffeeNum){
                break;
            }
        }else if(command === 'Prefer'){
            let indexA = actions[1];
            let indexB = actions[2];

            if((indexA >= 0 && indexA <= namesOfTheCoffees.length) &&
              (indexB >= 0 && indexB <= namesOfTheCoffees.length)){
                let tempIndex = namesOfTheCoffees[indexA];
                namesOfTheCoffees[indexA] = namesOfTheCoffees[indexB];
                namesOfTheCoffees[indexB] = tempIndex;
                
              }else{
                break;
              }
        }else if (command === 'Reverse'){
            namesOfTheCoffees = namesOfTheCoffees.reverse();
        }
        
    }
    console.log(`Coffees:\n${namesOfTheCoffees.join(' ')}`);
}
//coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
//"5",
//"Include TurkishCoffee",
//"Remove first 2",
//"Remove last 1",
//"Prefer 3 1",
//"Reverse"])
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
   "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
