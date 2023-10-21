import { useState } from "react";
import { TURNS, WINNER_COMBOS } from "../constants";
import confetti from "canvas-confetti"
import Square from "../Square"
import WinnerModal from "../WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const checkToEndGame = (newBoard) => {
    return newBoard.every(square => square != null)
  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkToEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 lg:mt-32 mt-20">
      <h1 className="text-white text-5xl font-semibold">Tic Tac Toe</h1>
      <button onClick={resetGame} className="px-1 py-2 m-[10px] bg-transparent border-2 border-white text-white w-[150px] rounded-md transition duration-200 font-bold cursor-pointer hover:bg-white hover:text-black">Reset Game</button>
      <section className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 text-white">
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="flex flex-col items-center gap-4 text-white lg:mt-10 ">
        <h1 className="font-semibold text-4xl">Turn</h1>
        <div className="text-6xl flex gap-4">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </div>
  )
}

export default App
