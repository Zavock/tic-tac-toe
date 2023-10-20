import { useState } from "react";
import { TURNS, WINNER_COMBOS } from "../constants";
import confetti from "canvas-confetti"
import Square from "../Square"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);
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
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkToEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 mt-32">
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
      <section className="flex flex-col items-center gap-4 text-white mt-10">
        <h1 className="font-semibold text-4xl">Turn</h1>
        <div className="text-6xl flex gap-4">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>

      {
        winner != null && (
          <section className="absolute w-[100vw] h-[100vh] top-0 left-0 grid place-items-center bg-black/75">
            <div className="bg-black h-[380px] w-[320px] border-2 border-white rounded-lg flex flex-col justify-center items-center gap-2">
              <h2 className="text-white text-2xl mt-10">
                {
                  winner === false
                  ? 'Draw'
                  : 'Winner'
                }
              </h2>
              <header className="m-auto w-fit text-white b">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame} className="px-1 py-2 m-[25px] bg-transparent border-2 border-white text-white w-[100px] rounded-md transition duration-200 font-bold cursor-pointer hover:bg-white hover:text-black">New Game</button>
              </footer>
            </div>
          </section>
        )
      }
    </div>
  )
}

export default App
