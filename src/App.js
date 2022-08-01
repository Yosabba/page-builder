import "./App.css";
import Cube from "./assets/Cube";
import Text from "./assets/Text";
import DraggableElement from "./components/DraggableElement";

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <DraggableElement>
          <h1>btbddfbdf</h1>
          <div>hegjnk</div>
          <Text />
        </DraggableElement>

        <DraggableElement>
          <h1>btbddfbdf</h1>
          <div>hegjnk</div>
          <Cube />
        </DraggableElement>
      </div>
    </div>
  );
}

export default App;
