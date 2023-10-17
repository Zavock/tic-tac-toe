const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="border-2 border-white grid place-items-center rounded-lg w-28 h-28">
      {children}
    </div>
  );
}

export default Square;
