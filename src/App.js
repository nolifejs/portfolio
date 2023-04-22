import "./App.css";
import Homepage from "./Pages/Homepage";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
