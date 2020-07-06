function insertionSort(array){
  for(let i=1;i<array.length;i++){
  if(array[0]>array[i]){
    array.unshift(array[i]);
    array.splice(i+1,1);
  }else{
   for(let j=1;j<i;j++){
     if(array[j-1]>array[j] && array[j+1] <array[j]){
       let temp=array[j];
       array[j]=array[j+1];
       array[j+1]=temp;
     }
   } 
  }
  }
  return array;
}

module.exports.insertionSort=insertionSort;