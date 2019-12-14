class RaceManager {
  constructor(GUIManager = None, algorithms = {}) {
    this.algorithms = algorithms;

    // set column index for use by the the gui manager
    for (let i = 0; i < Object.keys(this.algorithms).length; i++) {
      this.algorithms[algorithm].columnIndex = i;
    }

    this.GUIManager = new GUIManager(1800, 800, 3);
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
    let result;

    // while there are algorithms still running
    while (Object.keys(this.algorithms).length > 0) {
      for (const algorithm in this.algorithms) {
        result = this.algorithms[algorithm].step();

        if (result === 0) {
          // stop iterating on algorithm
          delete this.algorithms[algorithm];
        } else if (result === 2) {
          // update row
          this.GUIManager.updateRow(
            this.algorithms[algorithm].id,
            this.algorithms[algorithm].a,
            this.algorithms[algorithm].b,
            this.algorithms[algorithm].arr
          );
        } else if (result === 3) {
          this.GUIManager.addRow(
            this.algorithms[algorithm].id,
            this.algorithms[algorithm].arr
          );
        }
      }
    }
  }
}
