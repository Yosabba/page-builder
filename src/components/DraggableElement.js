const DraggableElement = ({ children }) => {
  return (
    <div draggable={true} className="draggable-element">
      {children}
    </div>
  );
};

export default DraggableElement;
