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
        this.algorithms[algorithm].getArray().toString()
      );
      this.GUIManager.addRow(
        this.algorithms[algorithm].columnIndex,
        this.algorithms[algorithm].getArray()
      );
    }

    this.loopInterval = setInterval(this.mainLoop, 2000);

    // while there are algorithms still running
    // while (Object.keys(this.algorithms).length > 0) {}
  }

  mainLoop = () => {
    let result;

    for (const algorithm in this.algorithms) {
      result = this.algorithms[algorithm].step();

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
          this.algorithms[algorithm].getArray()
        );
      } else if (result === 3) {
        // update row
        if(this.algorithms[algorithm].columnIndex != 0) {
          console.log("highlighting");
          this.GUIManager.updateRow(
            this.algorithms[algorithm].columnIndex,
            this.algorithms[algorithm].a,
            this.algorithms[algorithm].b,
            this.algorithms[algorithm].getArray()
          );
        }
        console.log("adding a new row");
        console.log(
          this.algorithms[algorithm].columnIndex,
          this.algorithms[algorithm].getArray().toString()
        );
        this.GUIManager.addRow(
          this.algorithms[algorithm].columnIndex,
          this.algorithms[algorithm].getArray()
        );
      }
    }

    if (Object.keys(this.algorithms).length <= 0) {
      console.log("clearing intervals");
      clearInterval(this.loopInterval);
    }
  };
}
