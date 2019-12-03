class QuickSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    // possible actions: pivot, compare, split, swap
    this.nextAction = "pivot";
  }

  step() {
    switch (this.nextAction) {
      case "finished":
        return 0;
      case "pivot":
        return 1;
      case "compare":
        return 1;
      case "split":
        return 1;
      case "swap":
        return 2;
    }
  }
}
