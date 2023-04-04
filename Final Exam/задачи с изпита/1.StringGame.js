function stringGame(text) {
    let myString = text.shift();
   
    while (text[0] !== "Done") {
      let token = text.shift().split(` `);
      let command = token[0];
   
      if (command === `Change`) {
        let char = token[1];
        let change = token[2];
        myString = myString.split(char);
        myString = myString.join(change);
        console.log(myString);
      }
      if (command === "Includes") {
        let substring = token[1];
        if (myString.includes(substring)) {
          console.log(`True`);
        } else {
          console.log(`False`);
        }
      }
      if (command === "End") {
        let endStr = token[1];
        if (myString.endsWith(endStr)) {
          console.log(`True`);
        } else {
          console.log(`False`);
        }
      }
      if (command === "Uppercase") {
        myString = myString.toUpperCase();
        console.log(myString);
      }
      if (command === "FindIndex") {
        let currChar = token[1];
        let index = myString.indexOf(currChar);
        console.log(index);
      }
      if (command === "Cut") {
        let startIndex = +token[1];
        let count = +token[2];
        let cut = myString.substring(startIndex,startIndex+ count);
        console.log(cut);
      }
    }
  }
  stringGame(["//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done"])
  
  console.log(`---`);
  stringGame(["*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done"])
  