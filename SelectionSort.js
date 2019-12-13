class SelectionSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: compare, swap, finished
    this.nextAction = "compare";

    //Indexes that have been updated
    this.a = 0;
    this.b = 0;
  }

  step() {
    switch (this.nextAction) {
      case "finished":
        return 0;
      case "compare":
        return 1;
      case "swap":
        return 2;
    }
  }
}
function swap(arr, firstIndex, secondIndex){
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function selection_sort(arr) {
  var size = arr.length;
  var min; 
  //iterate through array
  for (i=0; i < size; i++){
    //set minimum to ith position
    min = i;
    //iterate through array to see if items < than ith element
    for (j=i+1; j < size; j++){
        if (arr[j] < arr[min]){
            min = j;
        }
    }

    //if the minimum isn't in the position, swap it
    if (i != min){
        swap(arr, i, min);
    }
  }
  return arr;
}

function swap(arr, firstIndex, secondIndex){
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  this.a = firstIndex;
  this.b = secondIndex;
}

console.log(selection_sort([ 19, 9, 8, 7, 6, 5, 6, 6, 4,3,5,2 ]))