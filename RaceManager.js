class RaceManager {
  constructor(GUIManager = None, algorithms = {}) {
    this.algorithms = algorithms;

    // set column index for use by the the gui manager
    for (let i = 0; i < Object.keys(this.algorithms).length; i++) {
      this.algorithms[algorithm].columnIndex = i;
    }

    this.GUIManager = GUIManager;
  }
  /*
   *
   */
  start() {
    let result;

    // while there are algorithms still running
    while (Object.keys(this.algorithms).length > 0) {
      for (const algorithm in this.algorithms) {
        result = this.algorithms[algorithm].step();
        if (result === 0) {
          // stop iterating on the algorithm
          delete this.algorithms[algorithm];
        } else if (result === 2) {
          // call update and pass the algorithm object
          this.GUIManager.update(this.algorithms[algorithm]);
        }
      }
    }
  }
}
