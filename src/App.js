import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Gamedisplay from "./Components/Gamedisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Gamedisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
