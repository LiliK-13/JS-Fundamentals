function dayOfWeek(dayAsNum){
    if (dayAsNum < 1 || dayAsNum > 7){
        console.log('Invalid day!')
    }else{
        let days = ["Monday", "Tuesday", 
                    "Wednesday", "Thursday", 
                    "Friday", "Saturday", 
                    "Sunday"];
let index = dayAsNum -1;

console.log(days[index])
    }
}
dayOfWeek(3)
dayOfWeek(-3)
dayOfWeek(7)