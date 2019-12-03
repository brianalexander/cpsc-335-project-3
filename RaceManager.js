class RaceManager {
  constructor(GUIManager = None, algorithms = {}) {
    this.algorithms = algorithms;
    this.GUIManager = GUIManager;
  }

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
