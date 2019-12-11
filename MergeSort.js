class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: split, compare, merge, swap, finished
    this.nextAction = "split";
  }

  /**
   * @function
   * @name step
   * @description Performs one step of the algorithm.
   * @memberof MergeSort
   * @returns {number} - Indicates the state of the
   *      model, either 0->finished, 1->continue,
   *      2->updateGUI
   */
  step() {
    switch (this.nextAction) {
      case "finished":
        return 0;
      case "compare":
        return 1;
      case "merge":
        return 1;
      case "swap":
        return 2;
    }
  }
}

class SelectionSort{
  constructor(toSort){
    //implement state as a stack to keep track of state
    this.i = 0;
    this.j = 0;
    this.min = 0;
  }
}

step() {
  
}
