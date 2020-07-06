function mergeSort(array){
  let split=Math.floor(array.length/2);
  if(!split){
    return array;
  }
  let left=array.slice(0,split);
  let right=array.slice(split);

  return merge(mergeSort(left),mergeSort(right));

}
function merge(left,right){
  let leftIndex=0,rightIndex=0,result=[];
  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
module.exports.mergeSort=mergeSort;