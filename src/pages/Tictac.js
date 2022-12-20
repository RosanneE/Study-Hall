import React, { useState } from "react";

const TicTac = () => {
  const[inPlay, setInPlay] = useState(false)



  const styleInPlay = () =>{
    setInPlay ? setInPlay = true : setInPlay = false
    console.log(inPlay )
  }
  
  return (
    <div>
      <h1>TicTacToe</h1>
      <div>
        <div className="tic-row">
          <button className="ticSquare" style={{color: inPlay? 'black' : 'light grey'}} onClick={styleInPlay}> XO</button>
          <button className="ticSquare"> XO </button>
          <button className="ticSquare"> XO </button>
        </div>
      </div>
    </div>
  );
};
export default TicTac;
