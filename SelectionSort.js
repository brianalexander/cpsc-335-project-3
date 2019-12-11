class SelectionSort {
  constructor(toSort) {
    this.arr = toSort;
    this.index = 0;
    this.min = 0;
    this.length = toSort.length;
    this.current = 1;

  }

  step() {
    //checks if gone beyond bounds i.e done
    if (this.index >= this.length){
      //pass through entire array if done and return 0
      return 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }
    //sort
    else {

      if (this.current < this.length){
        if (this.arr[this.current] < this.arr[this.min]){
          // update position of minimum value atm
          this.min  = this.current;
          //increment current position for more comparisons
          this.current++;
          //compare
          return 1;
        }
        if (this.arr[this.current] >= this.arr[this.min]) {
          this.current++;
          return 1;
        }
      }
      else {
        swap(this.arr, this.index, this.min );
        this.index++;
        this.min = this.index;
        this.current = this.index+1;
      }



      

      // compare 
   
      // if the index element is bigger than the minimum value in the array we need to swap because index should be the smallest
      
    }
    
    function swap(arr, firstIndex, secondIndex){
      var temp = arr[firstIndex];
      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = temp;
    }
  }
}





/*function swap(arr, firstIndex, secondIndex){
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
*/

