const {bubbleSort}=require("./bubbleSort");
const {selectionSort}=require("./selectionSort");
const {mergeSort}=require("./mergeSort");
const {quickSort}=require("./quickSort");
const {insertionSort}=require("./insertionSort");


console.log("Bubble Sort:",bubbleSort([3,4,5,2,1]));
console.log("Merge Sort:",mergeSort([3,4,5,2,1]));
console.log("Selection Sort:",selectionSort([3,4,5,2,1]));
console.log("Insertion Sort:",insertionSort([3,4,5,2,1]));
console.log("Quick Sort:",quickSort([3,4,5,2,1]));

