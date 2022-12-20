// //OG tic board

// import { useState } from "react";

// const Main = () => {
//   let inHtml = "";
//   let turn = true;
//   let xIm = "red";
//   //   'https://constablesestateagents.co.uk/wp-content/uploads/2020/11/185-1857130_grunge-x-png-transparent-png.png'
//   let oIm = "purple";
//   //   'https://www.kindpng.com/picc/m/33-339417_black-outline-circle-png-transparent-png.png'

//   const [isTurn, setIsTurn] = useState(false);

//   const setSqu = (sq) => {
//     setIsTurn((current) => !current);
//     console.log(isTurn);
//     // if (){}
//   };

//   return (
//     <div>
//       <h2>TicTacToe</h2>
//       <div className="ticBoard">
//         <div className="row">
//           <button
//             className="ticTacSqu"
//             onClick={this.setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//         </div>
//         <div className="row">
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//         </div>
//         <div className="row">
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//           <button
//             className="ticTacSqu"
//             onClick={setSqu}
//             style={{
//               backgroundColor: isTurn ? "red" : "purple",
//               backgroundSize: "cover",
//             }}
//           ></button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Main;



// //TIC TAC ORIGINAL CODE
// import React, { components } from "react";

// const TicTac = () => {
//   class TicSquare extends React.Component {
//     render() {
//       return <button className="square">{this.props.value}</button>;
//     }
//   }

//   class TicBoard extends React.Component {
//     renderSquare(i) {
//       return <TicSquare value={i} />;
//     }

//     render() {
//       const status = "Player X is up!";

//       return (
        <div>
          <div className="ticStatus">{status}</div>
          <div className="tic-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="tic-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="tic-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
//       );
//     }
//   }
// };
//  export default TicTac