class GUIManager {
  constructor(width, height, numberOfAlgorithms) {

    this.width = width;
    this.height = height;
    this.numberOfAlgorithms = numberOfAlgorithms;

    this.row = new Array(numberOfAlgorithms);
    for(let i = 0; i < this.row.length; i++){
      this.row[i] = 40; // we wont want this to start at 0 since we will want to put text above each saying what alg it is
    }

    this.col = new Array(numberOfAlgorithms);
    let pix = 0;
    for(let i = 0; i < this.col.length; i++){
      this.col[i] = pix;
      pix += 520; // still finding arithmetic to get the right pixel increment given numalg and canvas.width
    }

    this.sqr = 40; // still finding arithmetic to get sqr width given numalg and width, height of canvas

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
    this.ctx = canv.getContext("2d");
    this.ctx.fillStyle = "black";
    canv.width = width;
    canv.height = height;
    this.ctx.fillRect(0, 0, canv.width, canv.height);

    this.drawNames(columns);
  }

  drawNames(length) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";  // white
    this.ctx.font = "20px Arial Black";
    this.ctx.fillText("Merge", this.col[0] + (length/2) * this.sqr - this.sqr/2, 22);
    this.ctx.fillText("Quick", this.col[1] + (length/2) * this.sqr - this.sqr/2, 22);
    this.ctx.fillText("Select", this.col[2] + (length/2) * this.sqr - this.sqr/2, 22);
    // this.ctx.fillText("Merge", 80, 10);
    // this.ctx.fillText("Quick", 160, 10);
    // this.ctx.fillText("Select", 240, 10);
    this.ctx.fill();
    this.ctx.stroke();
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
    this.highlightHelper(id, index, val);
  }

  highlightHelper(id, index, val, ctx = this.ctx) {
    ctx.clearRect(this.col[id] + (index * this.sqr), this.row[id], this.sqr, this.sqr);  // clear the un-highlighted sqr
    ctx.strokeStyle = "#ffff00";  // yellow
    ctx.fillStyle = "#ffffff";  // white
    ctx.save();
    ctx.beginPath();
    ctx.rect(this.col[id] + (index * this.sqr), this.row[id], this.sqr, this.sqr); // place the new highlighted sqr
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "#000000";  // black
    ctx.font = "20px Arial Black";
    ctx.stroke();
    ctx.fillText(val, this.col[id] + (index * this.sqr) + (this.sqr / 2), this.row[id] + (this.sqr / 2));  // place the index value in the middle of sqr
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
    this.row[id]++;
    this.drawArray(id, array);
  }

  drawArray(id, array){
    this.drawArrayHelper(id, array);
  }

  drawArrayHelper(id, array, ctx = this.ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";  // white
    ctx.strokeStyle = "#000000";  // black(dont need this since canvas is set to black)
    var pixel = this.col[id];  // get the algorithm's start pixel
    for (let i = 0; i < array.length; i++) {
      ctx.rect(pixel + (i * this.sqr), this.row[id], this.sqr, this.sqr); // place the sqr
      //pixel += this.sqr; // get the coordinate for the next sqr
      ctx.fill();
      ctx.stroke();
    }

    for (let i = 0; i < array.length; i++) {
      ctx.save();
      ctx.fillStyle = "#000000";  // black
      ctx.font = "20px Arial Black";
      ctx.stroke();
      ctx.fillText(array[i], pixel + (i * this.sqr) + (this.sqr / 2), this.row[id] + (this.sqr / 2)); // place the index value inside the sqr
      ctx.restore();
    }
  }
}

