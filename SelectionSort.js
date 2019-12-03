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
