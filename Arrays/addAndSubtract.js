function addAndSubtract(arr){
 let originalArrySum = 0;
 let newArraySum = 0
 let inputL = arr.length
    for( let i =0; i < inputL; i++){
      originalArrySum +=arr[i];
      
      if(arr[i]%2 ===0){
          arr[i]+=i
      }else{
          arr[i]-=i;
      }
      newArraySum+=arr[i]
    
}

console.log(arr)
console.log(originalArrySum);
console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35])