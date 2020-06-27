const makeTwoDim = (cols, rows) => {
    var colsArr = new Array(cols);
    

    //Makes Two Dimensional Array
    for(let i = 0; i < colsArr.length; i++){
      colsArr[i] = new Array(rows)
    }

    //fills Two Dimensional Array with 0's and 1's
    for(let i = 0; i < colsArr.length; i++){
      for( let j = 0; j < rows; j++){
        colsArr[i][j] = Math.floor(Math.random() * 2);
      }
    }

    return colsArr
  }

  export default makeTwoDim;