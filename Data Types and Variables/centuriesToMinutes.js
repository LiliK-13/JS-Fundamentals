function centuriesToMinutes(centurie){
let year = centurie * 100;
let day = Math.floor(year * 365.2422);
let hour = day * 24;
let minute = hour * 60;

console.log(`${centurie} centuries = ${year} years = ${day} days = ${hour} hours = ${minute} minutes`)

}
centuriesToMinutes(1)
centuriesToMinutes(5)