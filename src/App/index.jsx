import Square from "../Square"

const board = Array(9).fill(null)
function App() {
  return (
    <div className="flex flex-col items-center gap-5 mt-32">
      <h1 className="text-white text-4xl font-semibold">Tic Tac Toe</h1>
      <section className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 text-white">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                
              </Square>
            )
          })
        }
      </section>
    </div>
  )
}

export default App
