function reversedChars(sim1,sim2,sim3){
let sim1String = String(sim1);
let sim2String = String(sim2);
let sim3String = String(sim3);
let sumStr =(`${sim1String} ${sim2String} ${sim3String}`);
let strRev ="";
for (let i = sumStr.length-1; i >=0; i--){
    strRev+=sumStr[i]
}
console.log(strRev)
}
reversedChars('A','B','C')
reversedChars('1','L','&')