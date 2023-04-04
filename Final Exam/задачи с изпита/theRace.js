function theRace(input) {
    let index = 0;
    let pattern = /((#[A-Z-a-z]+#)|($[A-Z-a-z]+$)|(%[A-Z-a-z]+%)|(\*[A-Z-a-z]+\*)|(&[A-Z-a-z]+&))=[0-9]+!{2}/g;
    let decryptedHash = '';
    let notFound = 'Nothing found!';

    for (let string of input) {
        if (string.match(pattern)) {
            let data = string.match(pattern).join('');
            let geohashcode = string.split(data).filter(Boolean).join('');
            data = data.split(/#|$|%|\*|&|=|!/).filter(Boolean);
            let nameOfRacer = data[0];
            let hashLength = Number(data[1]);

            if (geohashcode.length === hashLength) {
                for (let i = 0; i < geohashcode.length; i++) {
                    let asciiValue = geohashcode.charCodeAt(i);
                    asciiValue += hashLength;
                    decryptedHash += String.fromCharCode(asciiValue);
                }
                console.log('Coordinates found!', nameOfRacer, '->', decryptedHash);
                break;
            } else {
                console.log(notFound);
            }
        } else {
            console.log(notFound);
        }
    }
}

theRace(["%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"]);

console.log('---');

theRace(["Ian6Hutchinson=7!!\(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd"]);


    85 от 100