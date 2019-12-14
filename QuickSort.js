class QuickSort {
  queue = new Array();

  constructor(toSort) {
    //queue of partitions to sort
    this.queue = [];
    this.queue.push([0, toSort.length - 1]);
    //index i & start of the partition
    this.i = this.start = 0;
    //index j & end of the partition
    this.j = toSort.length - 2;
    //Pivot
    this.p = this.end = toSort.length - 1;
    //Entire array being sorted
    this.arr = toSort;

    //indexes for the race manager to pass to GUI updates
    this.a = 0;
    this.b = 0;
  }

  nextItem() {
    this.queue.shift();
    //console.log("queue length:"+this.queue.length);
    // console.log(this.queue.length === 0);
    //Check if queue is empty
    if (this.queue.length === 0) {
      //Sort is finished
      return 0;
    }
    this.i = this.start = this.queue[0][0];
    this.j = this.queue[0][1] - 1;
    this.p = this.end = this.queue[0][1];

    //Not done sorting
    return 3;
  }

  swap(p1, p2) {
    // console.log(
    //   "Swapping index " +
    //     p1 +
    //     ":" +
    //     this.arr[p1] +
    //     " and index " +
    //     p2 +
    //     ":" +
    //     this.arr[p2]
    // );
    let v = this.arr[p1];
    this.arr[p1] = this.arr[p2];
    this.arr[p2] = v;
    this.a = p1;
    this.b = p2;
  }

  step() {
    //Check if partition is only one index,
    if (this.queue[0][0] >= this.queue[0][1]) {
      this.a = this.b = this.queue[0][0];
      //Set up next partition
      return this.nextItem();
    }

    //Check i position has not passed j position
    if (this.i <= this.j) {
      //Check if value at i is less than the pivot
      if (this.arr[this.i] <= this.arr[this.p]) {
        //Increment i position
        this.i++;
        //Continue
        return 1;
      } else {
        //i is ready to swap, check if j is greater than the pivot
        if (this.arr[this.j] >= this.arr[this.p]) {
          //Increment j position
          this.j--;
          //Continue
          return 1;
        } else {
          //i and j swap values
          // console.log("Swapping i and j");
          this.swap(this.i, this.j);
          return 2;
        }
      }
    } else {
      //i and p swap values
      // console.log("Swapping i and p");
      this.swap(this.i, this.p);
      //console.log(this.start+" "+this.j);
      this.queue.push([this.start, this.j]);
      //console.log((this.i+1)+" "+this.end);
      this.queue.push([this.i + 1, this.end]);
      return this.nextItem();
    }
  }
}
