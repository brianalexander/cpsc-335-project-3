class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.state = [toSort];

    this.mergeStack = [];
    this.mergeSortStack = [toSort];

    // possible actions: mergeSort, compare, merge, swap, finished
    this.nextAction = ["mergeSort"];
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
      case "mergeSort":
        this.mergeSort(this.mergeSortStack.pop());
        return 1;
      case "merge":
        const leftAndRight = this.mergeStack.pop();
        this.merge(leftAndRight[0], leftAndRight[1]);
        return 2;
    }
  }

  mergeSort(arr) {
    if (arr.length < 2) {
      // ready to merge
      // return arr;
      this.mergeStack(arr);
      this.nextAction = "merge";
    }

    // find middle value
    const middle = Math.floor(arr.length / 2);

    // left is zero to middle value, exclusive
    const left = arr.slice(0, middle);

    // right is middle value to end
    const right = arr.slice(middle);

    // call mergeSort on each half, then merge the results
    // return merge(mergeSort(left), mergeSort(right));
    this.mergeSortStack.push(left);
    this.mergeSortStack.push(right);
    this.mergeStack.push([left, right]);
  }

  merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
}
