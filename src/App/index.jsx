import { useState } from "react";
import { TURNS } from "../constants";
import Square from "../Square"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }
  return (
    <div className="flex flex-col items-center gap-5 mt-32">
      <h1 className="text-white text-5xl font-semibold">Tic Tac Toe</h1>
      <section className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 text-white">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="flex flex-col items-center gap-4 text-white mt-10">
        <h1 className="font-semibold text-4xl">Turn</h1>
        <div className= "text-7xl flex gap-4">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>
    </div>
  )
}

export default App
