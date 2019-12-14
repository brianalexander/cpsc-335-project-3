class RaceManager {
  constructor(GUIManager = None, algorithms = {}) {
    this.algorithms = algorithms;
    this.keys = Object.keys(this.algorithms);

    // set column index for use by the the gui manager
    for (let i = 0; i < this.keys.length; i++) {
      this.algorithms[this.keys[i]].columnIndex = i;
    }

    this.GUIManager = GUIManager;
  }

  /**
   * @function
   * @name start
   * @description This is the main loop for RaceManager.
   *      Runs until all of the algorithms are in a
   *      finished state.
   *
   * @memberof RaceManager
   * @returns {None}
   */
  start() {
    this.GUIManager.init(12);

    for (const algorithm in this.algorithms) {
      console.log(
        this.algorithms[algorithm].columnIndex,
        this.algorithms[algorithm].arr
      );
      this.GUIManager.addRow(
        this.algorithms[algorithm].columnIndex,
        this.algorithms[algorithm].arr
      );
    }

    this.loopInterval = setInterval(this.mainLoop, 500);
  }

  mainLoop = () => {
    for (const algorithm in this.algorithms) {
      let result = this.algorithms[algorithm].step();
      console.log(result);

      if (result === 0) {
        // stop iterating on algorithm
        delete this.algorithms[algorithm];
      } else if (result === 2) {
        // update row
        console.log("highlighting");
        this.GUIManager.updateRow(
          this.algorithms[algorithm].columnIndex,
          this.algorithms[algorithm].a,
          this.algorithms[algorithm].b,
          this.algorithms[algorithm].arr
        );
      } else if (result === 3) {
        console.log("adding a new row");
        // if(algorithm === "MergeSort") {
        //   console.log(this.algorithms[algorithm].arr)
        // }
        this.GUIManager.addRow(
          this.algorithms[algorithm].columnIndex,
          this.algorithms[algorithm].arr
        );
      }
    }

    if (Object.keys(this.algorithms).length <= 0) {
      console.log("clearing intervals");
      clearInterval(this.loopInterval);
    }
  };
}
