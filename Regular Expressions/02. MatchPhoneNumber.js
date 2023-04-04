function matchPhoneNumber(text){
    let redEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = [];
    let validMatche;

    while((validMatche = redEx.exec(text)) !== null){
        matches.push(validMatche[0]);
    }
    console.log(matches.join(', '));

}
matchPhoneNumber(+359 2 222 2222)