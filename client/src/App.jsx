import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Dashboard from "./pages/DashBoard";

function App() {
  const [isOver, setIsOver] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isOver={isOver} setIsOver={setIsOver} />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
