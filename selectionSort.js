function selectionSort(array){
  
  for(let i=0;i<array.length;i++){
    let min=array[i],temp=array[i];
    for(let j=i+1;j<array.length;j++){
     
      if(min>array[j]){
        min=array[j];
      }
    }
    if(array[i] !== min){
      let index=array.indexOf(min);
      array[i]=min;
      array[index]=temp;
    }
  }
  return array;
}

module.exports.selectionSort=selectionSort;