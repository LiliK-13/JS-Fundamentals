function loadingBar (number){
    let compeated = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - compeated.length);
    
    if(incomplete.length === 0){
        console.log(`100% Complete!`)

    }else{
        console.log(`${number}% [${compeated}${incomplete}]`)
        console.log('Still loading...')
    }
}
loadingBar(30)