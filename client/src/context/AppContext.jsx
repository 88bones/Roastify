import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOver, setIsOver] = useState(false);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get("access_token");

  return (
    <AppContext.Provider
      value={{
        topArtists,
        setTopArtists,
        topTracks,
        setTopTracks,
        accessToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
