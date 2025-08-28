import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Dashboard from "./pages/DashBoard";

function App() {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get("access_token");

  const [isOver, setIsOver] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isOver={isOver} setIsOver={setIsOver} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard accessToken={accessToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
