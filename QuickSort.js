class QuickSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: pivot, compare, split
    this.nextAction = "pivot";
  }

  step() {}
}
