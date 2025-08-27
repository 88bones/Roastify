import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [isOver, setIsOver] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isOver={isOver} setIsOver={setIsOver} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
