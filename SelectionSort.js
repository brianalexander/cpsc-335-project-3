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
    if (this.index >= this.length) {
      //pass through entire array if done and return 0
      return 0;
    }
    //sort
    else {
      if (this.current < this.length) {
        if (this.arr[this.current] < this.arr[this.min]) {
          // update position of minimum value atm
          this.min = this.current;
          //increment current position for more comparisons
          this.current++;
          //compare
          return 1;
        }
        if (this.arr[this.current] >= this.arr[this.min]) {
          this.current++;
          return 1;
        }
      } else {
        this.swap(this.arr, this.index, this.min);
        this.index++;
        this.min = this.index;
        this.current = this.index + 1;
      }
    }
  }

  swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }
}
