import { useState } from "react";

const Main = () => {
  let inHtml = "";
  let turn = true
  let xIm = 'red'
//   'https://constablesestateagents.co.uk/wp-content/uploads/2020/11/185-1857130_grunge-x-png-transparent-png.png'
  let oIm = 'blue'
//   'https://www.kindpng.com/picc/m/33-339417_black-outline-circle-png-transparent-png.png'
  
  const [isTurn, setIsTurn] = useState(false)

  const changeTurn = () => {
    setIsTurn(current => !current)
  }

  const setSqu = (sq) => {
    setIsTurn(current => !current)
    console.log(turn)
  };

  return (
    <div>
      <h2>TicTacToe</h2>
      <div className = "ticBoard">
        <div className="row">
          <button className="ticTacSqu" onClick={setSqu} style={{backgroundColor: isTurn ?  '{{xIm}}' : '{{oIm}}', backgroundSize: 'cover'}}></button>
          <div className="ticTacSqu"></div>
          <div className="ticTacSqu"></div>
        </div>
        <div className="row">
          <div className="ticTacSqu"></div>
          <div className="ticTacSqu"></div>
          <div className="ticTacSqu"></div>
        </div>
        <div className="row">
          <div className="ticTacSqu"></div>
          <div className="ticTacSqu"></div>
          <div className="ticTacSqu"></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
