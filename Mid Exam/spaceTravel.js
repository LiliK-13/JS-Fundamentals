function spaceTravel(input) {
    let commands = input.shift().split("||");
    let fuel = Number(input.shift());
    let ammo = Number(input.shift());
    let command = commands.shift();
    let success = true;
    while (command !== "Titan") {
      let tokens = command.split(" ");
      let cmd = tokens.shift();
      let param = Number(tokens.shift());
      if (cmd === 'Travel') {
          if (fuel > 0) {
              fuel -= param;
              console.log(`The spaceship travelled ${param} light-years.`);
          } else{
              success = false;
              console.log('Mission failed.');
              break;
          }
      } else if (cmd === 'Enemy') {
          if (ammo >= param) {
              ammo -= param;
              console.log(`An enemy with ${param} armour is defeated.`);
          } else if (fuel >= 2*param) {
              fuel -= param*2;
              console.log(`An enemy with ${param} armour is outmaneuvered.`);
          } else{
              success = false;
              console.log('Mission failed.');
              break;
          }
      } else if (cmd === 'Repair') {
          fuel += param;
          ammo += 2*param;
          console.log(`Ammunitions added: ${2*param}.`);
          console.log(`Fuel added: ${param}.`);
      }
   
      command = commands.shift();
    }
    if (success) {
        console.log('You have reached Titan, all passengers are safe.');
    }
  }