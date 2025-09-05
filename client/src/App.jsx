import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Dashboard from "./pages/DashBoard";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import TopArtists from "./components/TopArtists";
import TopTracks from "./components/TopTracks";
import { AppProvider } from "./context/AppContext";

function App() {
  const [isOver, setIsOver] = useState(false);

  return (
    <Router>
      <NavBar isOver={isOver} setIsOver={setIsOver} />
      <Routes>
        <Route
          path="/"
          element={<Home isOver={isOver} setIsOver={setIsOver} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard isOver={isOver} setIsOver={setIsOver} />}
        >
          <Route index element={<TopArtists />} />
          <Route path="top-tracks" element={<TopTracks />} />
        </Route>
        <Route path="/about" element={<About isOver={isOver} />} />
      </Routes>
    </Router>
  );
}

export default App;
