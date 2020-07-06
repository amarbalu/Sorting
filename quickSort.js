function quickSort(array){
  let split=Math.floor(array.length/2);
  if(!split){
    return array;
  }
  let pivot=array.splice(split,1)
  let result=[];
  let lesserThanPivot=[];
  let greaterThanPivot=[];
  for(let i=0;i<array.length;i++){
    if(array[i]>pivot){
      greaterThanPivot.push(array[i]);
    }else{
      lesserThanPivot.push(array[i])
    }
  }
 return [...result.concat(quickSort(lesserThanPivot),pivot,quickSort(greaterThanPivot))];
}
module.exports.quickSort=quickSort;