function equalArrays(arr1,arr2){
   let sum = 0;
   for( let i in arr1){
       const firstEl = arr1[i];
       const secondEl = arr2[i];
       if (firstEl !== secondEl){
           console.log(`Arrays are not identical. Found difference at ${i} index`);
           return;
       }
       sum += +firstEl;
   }
   console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10','20','30'],['10','20','40'])
//equalArrays(['1','2','3','4','5'],['1','2','4','4','5'])