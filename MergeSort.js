class MergeSort {
  constructor(toSort) {
    // implement state as a stack to keep track of history
    this.queue = toSort.map(item => [item]);

    this.array = toSort;
    this.currentSegmentBeginIndex = 0;
    this.currentSegmentLength = 1;

    this.array1 = this.queue.shift();
    this.array2 = this.queue.shift();
    this.i = 0;
    this.j = 0;
    this.workingArray = [];
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
    if (this.i >= this.array1.length && this.j >= this.array2.length) {
      this.queue.push(this.workingArray);
      // One item in Queue.  Return 0, finished.
      if (this.queue.length == 1) {
        return 0;
      }

      this.currentSegmentBeginIndex =
        this.currentSegmentBeginIndex + this.currentSegmentLength;

      this.i = 0;
      this.j = 0;
      this.array1 = this.queue.shift();
      this.array2 = this.queue.shift();
      this.workingArray = [];

      this.currentSegmentLength = this.array1.length = this.array2.length;
    }

    // i is finished, add the next j
    if (this.i >= this.array1.length) {
      this.workingArray.push(this.array2[this.j]);
      this.j++;
      return 2;
    }

    // j is finished, add the next i
    if (this.j >= this.array2.length) {
      this.workingArray.push(this.array1[this.i]);
      this.i++;
      return 2;
    }

    // compare & merge the next item of each array segment
    if (this.array1[this.i] < this.array2[this.j]) {
      this.workingArray.push(this.array1[this.i]);
      this.i++;
      return 2;
    } else {
      this.workingArray.push(this.array2[this.j]);
      this.j++;
      return 2;
    }
  }
}

// class MergeSort {
//   constructor(toSort) {
//     this.array = toSort;
//     this.queue = [];

//     // implement queue as a stack to keep track of history
//     for (let i = 0; i < toSort.length; i++) {
//       this.queue.push([i, i]);
//     }
//     this.i = 0;
//     this.j = 1;
//   }

//   /**
//    * @function
//    * @name step
//    * @description Performs one step of the algorithm.
//    * @memberof MergeSort
//    * @returns {number} - Indicates the queue of the
//    *      model, either 0->finished, 1->continue,
//    *      2->updateGUI
//    */
//   step() {
//     // No items in Queue.  Return 0, finished.

//     // If we have finished parsing each array segment,
//     // get two more segments and continue.
//     if (this.i > this.queue[0][1] && this.j > this.queue[1][1]) {
//       if (this.queue[0][0] < this.queue[1][0]) {
//         this.queue.push([this.queue[0][0], this.queue[1][1]]);
//       } else {
//         this.queue.push([this.queue[1][0], this.queue[0][1]]);
//       }

//       this.queue.shift();
//       this.queue.shift();

//       if (this.queue.length == 1) {
//         return 0;
//       }

//       this.i = this.queue[0][0];
//       this.j = this.queue[1][0];
//     }

//     // // i is finished, add the remaining j's
//     // if (this.i > this.array1[1]) {
//     //   for (; this.j <= this.array2[1]; this.j++) {
//     //     this.workingArray.push(this.array2[this.j]);
//     //   }
//     //   return 2;
//     // }

//     // // j is finished, add the remaining i's
//     // if (this.j > this.array2[1]) {
//     //   for (; this.i <= this.array1[1]; this.i++) {
//     //     this.workingArray.push(this.array1[this.i]);
//     //   }
//     //   return 2;
//     // }

//     // compare the next item of each array segment
//     if (this.array[this.i] > this.array[this.j]) {
//       console.log("swap", this.array[this.i], this.array[this.j]);
//       let temp = this.array[this.i];
//       this.array[this.i] = this.array[this.j];
//       this.array[this.j] = temp;
//       this.i++;
//       this.j++;
//       return 2;
//     } else {
//       this.i++;
//       this.j++;
//       return 1;
//     }
//   }
// }
