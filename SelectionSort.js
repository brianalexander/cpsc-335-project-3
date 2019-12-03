class SelectionSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: compare, swap
    this.nextAction = "compare";
  }

  step() {}
}
