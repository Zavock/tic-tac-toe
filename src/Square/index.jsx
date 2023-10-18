const Square = ({ children, isSelected, updateBoard, index }) => {
  const style = `border-2 border-white grid place-content-center rounded-lg text-6xl w-28 h-28 cursor-pointer ${isSelected ? 'bg-white text-black' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={style}>
      {children}
    </div>
  );
}

export default Square;
