class SelectionSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: compare, swap, finished
    this.nextAction = "compare";
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

function selection_sort(arr) {
  var size = arr.length;
  var min; 
  //iterate through array
  for (i=0; i < size; i++){
    //set minimum to ith position
    min = i;
    //iterate through array to see if items < than ith element
    for (j=i+1; j < size; j++){
        if (items[j] < items[min]){
            min = j;
        }
    }

    //if the minimum isn't in the position, swap it
    if (i != min){
        swap(items, i, min);
    }
  }
  return items;
}

function swap(arr, firstIndex, secondIndex){
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

console.log(selection_sort([ 4,3,5,2 ]))