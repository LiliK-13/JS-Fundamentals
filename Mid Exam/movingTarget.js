function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(" ").map(Number);
    while (input.length > 0) {
      let command = input.shift();
  
      if (command == "End") {
        break;
      }
      let curCommand = command.split(" ")[0];
      switch (curCommand) {
        case "Shoot":
          let indexOfShoot = Number(command.split(" ")[1]);
          let power = Number(command.split(" ")[2]);
          if (indexOfShoot >= 0 && indexOfShoot < sequenceOfTargets.length) {
            sequenceOfTargets[indexOfShoot] -= power;
            if (sequenceOfTargets[indexOfShoot] <= 0) {
              sequenceOfTargets.splice(indexOfShoot, 1);
            }
          }
          break;
        case "Add":
          let indexOfAdd = Number(command.split(" ")[1]);
          let value = Number(command.split(" ")[2]);
          if (indexOfAdd >= 0 && indexOfAdd < sequenceOfTargets.length) {
            sequenceOfTargets.splice(indexOfAdd, 0, value);
          } else {
            console.log(`Invalid placement!`);
          }
          break;
        case "Strike":
          let indexOfStrice = Number(command.split(" ")[1]);
          let radius = Number(command.split(" ")[2]);
          if (indexOfStrice >= 0 && indexOfStrice < sequenceOfTargets.length) {
            if (
              indexOfStrice - radius >= 0 &&
              indexOfStrice + radius < sequenceOfTargets.length
            ) {
              sequenceOfTargets.splice(
                indexOfStrice - radius,
                radius + radius + 1
              );
            } else {
              console.log(`Strike missed!`);
            }
          }
          break;
      }
    }
  
    console.log(sequenceOfTargets.join("|"));
  
    function shootCommand(arr, index, power) {
      let curItem = arr[index];
      let itemForRemove = arr[index];
  
      if (curItem == undefined) {
        return arr;
      }
      if (index <= arr.length - 1) {
        curItem = curItem - power;
      }
      if (curItem <= 0) {
        arr = arr.filter((x) => x != itemForRemove);
      } else {
        arr[index] = curItem;
      }
      return arr;
    }
  }