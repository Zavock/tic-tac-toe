const Square = ({ children, isSelected, updateBoard, index }) => {
  const style = `border-2 border-white flex justify-center rounded-lg w-28 h-28 cursor-pointer ${isSelected ? 'bg-white text-black' : ''}`
  return (
    <div className={style}>
      {children}
    </div>
  );
}

export default Square;
