class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: split, compare, merge, swap, finished
    this.nextAction = "split";
  }

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
