import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Dashboard from "./pages/DashBoard";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import TopArtists from "./components/TopArtists";
import TopTracks from "./components/TopTracks";

function App() {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get("access_token");

  const [isOver, setIsOver] = useState(false);
  const [topArtists, setTopArtists] = useState([]);

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
          element={
            <Dashboard
              isOver={isOver}
              setIsOver={setIsOver}
              accessToken={accessToken}
              topArtists={topArtists}
              setTopArtists={setTopArtists}
            />
          }
        >
          <Route
            index
            element={
              <TopArtists
                accessToken={accessToken}
                topArtists={topArtists}
                setTopArtists={setTopArtists}
              />
            }
          />
          <Route element={<TopTracks />} path="top-tracks" />
        </Route>
        <Route path="/about" element={<About isOver={isOver} />} />
      </Routes>
    </Router>
  );
}

export default App;
