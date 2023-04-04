function censoredWords(text, word){

   // while(text.indexOf(word) >= 0){
    //    text = text.replace(word, "*".repeat(word.length))

   // }
   // console.log(text)

   // или

    let newText = text.split(word);
    let res = newText.join('*'.repeat(word.length))
    console.log(res)
}
censoredWords('A small sentence with some words', 'small')