class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: split, compare, merge
    this.currentAction = "split";
  }

  step() {}
}
