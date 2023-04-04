function charactersInRange(firstchar, secondchar){
    let startChar = Math.min(firstchar.charCodeAt(0), secondchar.charCodeAt(0));
    let endChar = Math.max(firstchar.charCodeAt(0), secondchar.charCodeAt(0));

    let charsInRangeArray = [];

    for(let current = startChar +1; current < endChar; current++){
       let currentChar = String.fromCharCode(current);
       charsInRangeArray.push(currentChar);
       
    }

    console.log(charsInRangeArray.join(' '));

}
charactersInRange('a','d')
//charactersInRange('#',':')
//charactersInRange('C','#')