class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.queue = toSort.map((item, index) => [[index, 1], [item]]);
    this.arr = toSort;

    this.array = toSort;

    this.firstRun = true;

    this.a = this.b = 0;
  }

  /**
   * @function
   * @name step
   * @description Performs one step of the algorithm.
   * @memberof MergeSort
   * @returns {number} - Indicates the queue of the
   *      model, either 0->finished, 1->continue,
   *      2->updateGUI
   */
  step() {
    // If we have finished parsing each array segment,
    // get two more segments and continue.
    if (
      this.firstRun ||
      (this.i >= this.array1.length && this.j >= this.array2.length)
    ) {
      if (!this.firstRun) {
        this.queue.push([
          [
            Math.min(this.startIndex1, this.startIndex2),
            this.length1 + this.length2
          ],
          this.workingArray
        ]);
        // One item in Queue.  Return 0, finished.
        if (this.queue.length == 1) {
          return 0;
        }
      }

      this.firstRun = false;

      this.i = 0;
      this.j = 0;
      this.workingArray = [];

      this.tuple1 = this.queue.shift();
      this.tuple2 = this.queue.shift();

      this.array1 = this.tuple1[1];
      this.array2 = this.tuple2[1];

      this.startIndex1 = this.tuple1[0][0];
      this.length1 = this.tuple1[0][1];
      this.endIndex1 = this.startIndex1 + this.length1;
      this.startIndex2 = this.tuple2[0][0];
      this.length2 = this.tuple2[0][1];
      this.endIndex2 = this.startIndex2 + this.length2;

      this.arrWorkingIndex = Math.min(this.startIndex1, this.startIndex2);

      // Null out working values of this.arr
      for (let i = this.startIndex1; i < this.endIndex1; i++) {
        this.arr[i] = "";
      }
      for (let i = this.startIndex2; i < this.endIndex2; i++) {
        this.arr[i] = "";
      }

      return 3;
    }

    // i is finished, add the next j
    if (this.i >= this.array1.length) {
      this.workingArray.push(this.array2[this.j]);
      this.arr[this.arrWorkingIndex] = this.array2[this.j];
      this.arrWorkingIndex++;
      this.a = this.b = this.j;
      this.j++;
      return 2;
    }

    // j is finished, add the next i
    if (this.j >= this.array2.length) {
      this.workingArray.push(this.array1[this.i]);
      this.arr[this.arrWorkingIndex] = this.array1[this.i];
      this.arrWorkingIndex++;
      this.a = this.b = this.i;
      this.i++;
      return 2;
    }

    // compare & merge the next item of each array segment
    if (this.array1[this.i] < this.array2[this.j]) {
      this.workingArray.push(this.array1[this.i]);
      this.arr[this.arrWorkingIndex] = this.array1[this.i];
      this.arrWorkingIndex++;
      this.a = this.b = this.i;
      this.i++;
      return 2;
    } else {
      this.workingArray.push(this.array2[this.j]);
      this.arr[this.arrWorkingIndex] = this.array2[this.j];
      this.arrWorkingIndex++;
      this.a = this.b = this.j;
      this.j++;
      return 2;
    }
  }
}
