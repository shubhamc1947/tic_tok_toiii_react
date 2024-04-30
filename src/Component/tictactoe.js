import "./style.css";
import circle from "./Asset/circle.png";
import cross from "./Asset/close.png";
import {  useState } from "react";

import clickSound from './Asset/play.wav';
import winner from './Asset/winner.wav';
import error from './Asset/error.wav';

function TicTacWrap() {
  const [isXTern, setIsXTern] = useState(true);
  const [arr, setArr] = useState(Array(9).fill(null));

  function play(ele, idx) {
    if(arr[idx]!==null){
      const audio2 = new Audio(error);
      audio2.play();
      setTimeout(() => {
        alert("Don't Clicked on Clicked Boxes")
      }, 500);
      return;
    }
    const copyArr = [...arr];
    copyArr[idx] = isXTern ? "X" : "O";
    setArr(copyArr);
    setIsXTern(!isXTern);

    
    const audio = new Audio(clickSound);
    audio.play();
  }
  function checkWinner() {
    //checking for the winning Condition
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];

      if (arr[a] === arr[b] && arr[b] === arr[c] && arr[c] !== null) {
        // isXTern?setIsXWin("X"):setIsXWin("O");
        const audio3 = new Audio(winner);
        audio3.play();
        return arr[a];
      }
    }

     //checking if all the boxes filled and no one won
     let allFilled=true;
     for(let i=0;i<arr.length;i++){
       if(arr[i]===null){
         allFilled=false;
       }
     }
     if(allFilled){
      const audio2 = new Audio(error);
      audio2.play();
       return "No One";
     }

    return false;
  }

  const checkWinnerFun = checkWinner();

  function resetGame() {
    setArr(Array(9).fill(null));
    setIsXTern(true);
  }
  return (
    <>
      <div className="wrapper">
        <h3>
          Tic Tac Toiii <span>GAME</span>
        </h3>

        {checkWinnerFun ? (
          <>{checkWinnerFun} Won</>
        ) : (
          <>
            <h4 >Player {isXTern?"X":"O"} Move</h4>
            <div className="main">
              <div className="box" onClick={(e) => play(e, "0")}>
                {arr[0] === "X" && <img src={cross} alt="cross" />}
                {arr[0] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "1")}>
                {arr[1] === "X" && <img src={cross} alt="cross" />}
                {arr[1] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "2")}>
                {arr[2] === "X" && <img src={cross} alt="cross" />}
                {arr[2] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "3")}>
                {arr[3] === "X" && <img src={cross} alt="cross" />}
                {arr[3] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "4")}>
                {arr[4] === "X" && <img src={cross} alt="cross" />}
                {arr[4] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "5")}>
                {arr[5] === "X" && <img src={cross} alt="cross" />}
                {arr[5] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "6")}>
                {arr[6] === "X" && <img src={cross} alt="cross" />}
                {arr[6] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "7")}>
                {arr[7] === "X" && <img src={cross} alt="cross" />}
                {arr[7] === "O" && <img src={circle} alt="circle" />}
              </div>
              <div className="box" onClick={(e) => play(e, "8")}>
                {arr[8] === "X" && <img src={cross} alt="cross" />}
                {arr[8] === "O" && <img src={circle} alt="circle" />}
              </div>
            </div>
          </>
        )}

        <button onClick={resetGame}>Reset</button>
      </div>
    </>
  );
}

export default TicTacWrap;
