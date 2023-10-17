import { useState } from "react";
import { TURNS } from "../constants";
import Square from "../Square"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);
  return (
    <div className="flex flex-col items-center gap-5 mt-32">
      <h1 className="text-white text-4xl font-semibold">Tic Tac Toe</h1>
      <section className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 text-white">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="flex gap-4 text-white text-7xl">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </div>
  )
}

export default App
