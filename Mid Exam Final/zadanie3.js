function chatLogger(input){

    let array = [];

    for(i = 0; i < input.length; i++){
        
        let commands = input[i].split(' ')
        let commandExecutes = commands[0];
        let message = commands[1];
        let existsIndex = array.indexOf(message);
        

        if(commandExecutes === 'Chat'){
            array.push(message)
        }else if (commandExecutes === 'Delete'){
            if(existsIndex >= 0){
               array.splice(existsIndex, 1)
            }
        }else if (commandExecutes === 'Edit'){
            if(existsIndex >= 0){
                array.splice(existsIndex, 1);
                array.splice(existsIndex, 0, commands[2]);
            }
        }else if (commandExecutes === 'Pin'){
            if(existsIndex >= 0){
                let pinned = array.splice(existsIndex, 1).toString();
                array.push(pinned)
            }
        }else if(commandExecutes === 'Spam'){
            for(let i=1; i < commands.length; i++){
                array.push(commands[i])
            }
        }else if(commandExecutes === 'end'){
            break;
        }
    }
console.log(array.join('\n'))
}
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
