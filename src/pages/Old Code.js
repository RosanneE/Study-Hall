//OG tic board

import { useState } from "react";

const Main = () => {
  let inHtml = "";
  let turn = true;
  let xIm = "red";
  //   'https://constablesestateagents.co.uk/wp-content/uploads/2020/11/185-1857130_grunge-x-png-transparent-png.png'
  let oIm = "purple";
  //   'https://www.kindpng.com/picc/m/33-339417_black-outline-circle-png-transparent-png.png'

  const [isTurn, setIsTurn] = useState(false);

  const setSqu = (sq) => {
    setIsTurn((current) => !current);
    console.log(isTurn);
    // if (){}
  };

  return (
    <div>
      <h2>TicTacToe</h2>
      <div className="ticBoard">
        <div className="row">
          <button
            className="ticTacSqu"
            onClick={this.setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
        </div>
        <div className="row">
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
        </div>
        <div className="row">
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="ticTacSqu"
            onClick={setSqu}
            style={{
              backgroundColor: isTurn ? "red" : "purple",
              backgroundSize: "cover",
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
export default Main;
