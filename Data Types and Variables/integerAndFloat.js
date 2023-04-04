function integerAndFloat (a, b, c){    // не работает
 let sum = a + b + c;
 let sumAsString = Srting(sum);
 let type = 'Integer';

 for (let i = 0; i < sumAsString.length; i++){
     if(sumAsString[i] == '.'){
       type = 'Float';  
     }
     
 }

 console.log(`${sum} - ${type}`)
}
integerAndFloat(1,2,3)
integerAndFloat(1,2,3.14)