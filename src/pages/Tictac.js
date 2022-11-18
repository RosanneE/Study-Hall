const Main = () => {
  let inHtml = "";

  let turn = true

  const setSqu = (sq) => {
    
    // if (inHtml === "" && turn=== true) {
    //     console.log(this)
    // }
  };

  return (
    <div>
      <h2>TicTacToe</h2>
      <div className = "ticBoard">
        <div className="row">
          <button className="ticTacSqu" style={{backgroundColor: 'red'}}></button>
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
