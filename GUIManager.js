class GUIManager {
  constructor(width, height, numberOfAlgorithms) {

    this.width = width;
    this.height = height;
    this.numberOfAlgorithms = numberOfAlgorithms;

    let row = new Array(numberOfAlgorithms);
    for(i = 0; i < row.size(); i++){
      row[i] = 0; // we wont want this to start at 0 since we will want to put text above each saying what alg it is
    }

    let col = new Array(numberOfAlgorithms);
    let pix = 0;
    for(i = 0; i < col.size(); i++){
      col[i] = pix;
      pix += 520; // still finding arithmetic to get the right pixel increment given numalg and canvas.width
    }

    let sqr = 40; // still finding arithmetic to get sqr width given numalg and width, height of canvas

  }
  /**
   * @function
   * @name init
   * @description Setup initial canvas
   * @param {Number} width pixels wide
   * @param {Number} height pixels tall
   * @param {Number} columns number of columns
   * @memberof GUIManager
   */
  init(width, height, columns) {
    // dont think we need columns but let me know your thoughts
    let canvas = document.createElement("canvas");
    canvas.id = "globalCanvas";
    document.body.appendChild(canvas);

    let canv = document.getElementById("globalCanvas");
    let ctx = canv.getContext("2d");
    ctx.fillStyle = "black";
    canv.width = width;
    canv.height = height;
    ctx.fillRect(0, 0, canv.width, canv.height);
  }

  /**
   * @function
   * @name updateRow
   * @description Performs a swap.
   * @memberof GUIManager
   * @param {Number} id ID for the algorithm to add a row.
   * @param {Number} a index of item to swap.
   * @param {Number} b index of item to swap.
   */
  updateRow(id, a, b, newArray) {
    this.highlight(id, a, this.oldArray[a]);
    this.highlight(id, b, this.oldArray[b])
    this.drawArray(id, newArray)
    this.oldArray = newArray;
  }

  highlight(id, index, val){
    switch(id) {
      case 0:
        highlightHelper(id, index, val);
      case 1:
        highlightHelper(id, index, val);
      case 2:
        highlightHelper(id, index, val);
    }
  }

  highlightHelper(id, index, val) {
    ctx.clearRect(col[id] + (index * sqr), row[id], sqr, sqr);  // clear the un-highlighted sqr
    ctx.strokeStyle = "#ffff00";  // yellow
    ctx.fillStyle = "#ffffff";  // white
    ctx.save();
    ctx.beginPath();
    ctx.rect(col[id] + (index * sqr), row[id], sqr, sqr); // place the new highlighted sqr
    ctx.fillText(val, col[id] + (index * sqr) + (sqr / 2), row[id] + (sqr / 2);  // place the index value in the middle of sqr
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /**
   * @function
   * @name addRow
   * @description Copies the current array state to
   *    a new line.
   * @memberof GUIManager
   * @param {Number} id ID for the algorithm to add a row.
   */
  addRow(id, array) {
    this.oldArray = array;
    row[id]++;
    this.drawArray(id, array);
  }

  drawArray(id, array){
    switch(id) {
      case 1:
        drawArrayHelper(id, array);
      case 2:
        drawArrayHelper(id, array);
      case 3:
        drawArrayHelper(id, array);
    }
  }

  drawArrayHelper(id, array) {
    ctx.fillStyle = "#ffffff";  // white
    ctx.strokeStyle = "#000000";  // black(dont need this since canvas is set to black)
    var pixel = col[id];  // get the algorithm's start pixel
    for (i = 0; i < array.size(); i++) {
      ctx.rect(pixel + (i * sqr), row[id], sqr, sqr); // place the sqr
      ctx.fillText(array[i], pixel + (i * sqr) + (sqr / 2), row[id] + (sqr / 2)); // place the index value inside the sqr
      pixel += sqr; // get the coordinate for the next sqr
      ctx.fill();
      ctx.stroke();
    }
  }
}

