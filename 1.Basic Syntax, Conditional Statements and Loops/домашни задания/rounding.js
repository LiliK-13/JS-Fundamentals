function rounding (num,roundsN){
    if(roundsN >=15){
        roundsN = 15
    }
        
        console.log(parseFloat(num.toFixed(roundsN)))
    
}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)