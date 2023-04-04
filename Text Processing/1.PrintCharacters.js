function printCharacters(str){

for(let i = 0 ; i < str.length; i ++){
    console.log(str[i])
}
или

for(let ch of str){
    console.log(ch)
}
}
printCharacters('AWord')