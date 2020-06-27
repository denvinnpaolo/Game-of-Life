import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import  makeTwoDim  from './utils/make2DArray.js'
import {Grid} from './components/Grid.js'

function App(){
  const [currentCell, setCurrentCell] = useState();
  const [nextCell, setNextCell] = useState();
  var cols = 10;
  var rows = 10;
  var current = makeTwoDim(cols, rows)

  useEffect(()=> {setCurrentCell(nextCell)}, [nextCell]);

  useEffect(()=> {
    current = nextGen(current)

    setNextCell(current)
  }, [currentCell]);

  

  const nextGen = current => {
    let next = current
    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        var state = next[i][j];
          //sum of neighbors
        var neighbors = countNeighbors(next, i, j)

        if(state === 0 && neighbors === 3){
          next[i][j] = 1;
        } else if(state === 1 && (neighbors < 2 || neighbors > 3)){
          next[i][j] = 0
        } else {
          next[i][j] = state
        }
      }
    }
    return next
  }

  const countNeighbors = (current, x, y) => {
    //total number of neighbors
    let sum = 0;

    //loop through the neighbors
    for(let i = -1; i < 2; i++){
      for(let j = -1; j < 2; j++){
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += current[col][row]
      }
    }

    //subtract current cell to the sum of total neighbors
    sum -= current[x][y]
    
    return sum
  }

  // const handleStart = e => {
  //   e.preventDefault();
    
  //   current = makeTwoDim(cols, rows)
  //   setCurrentCell(current);
  // }

  return(
    <div className="App">
      {/* <Grid /> */}
      {currentCell}
    </div>
  )
}

export default App;
