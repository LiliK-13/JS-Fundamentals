function matchFullName(text){
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let output = [];

    let matches = text.match(regEx);
    for(let name of matches){
        output.push(name)
    }
console.log(output.join(' '));
}
matchFullName(ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov)