import Square from "../Square";
// eslint-disable-next-line react/prop-types
const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null
  return (
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
  );
}

export default WinnerModal;
