import React, { components } from "react";

class TicSquare extends React.Component {
  render() {
    return <button className="square">
        {this.props.value}
    </button>;
  }
}

class TicBoard extends React.Component{
  renderSquare(i) {
   return <TicSquare value={i}/>
}


render() {
  const status = 'Player X is up!'

  return (
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
  );
  }

}