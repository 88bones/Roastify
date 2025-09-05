import React, { useEffect, useState, useContext } from "react";
import { postTopArtist } from "../services/getRoast";
import { AppContext } from "../context/AppContext";

const Roaster = () => {
  const { topArtists } = useContext(AppContext);

  const [roast, setRoast] = useState("");

  useEffect(() => {
    if (topArtists?.length > 0) {
      const simplifiedArtist = topArtists.map((artist) => ({
        name: artist.name,
        genres: artist.genres,
      }));

      const artistSummary = simplifiedArtist
        .map((a) => `${a.name}(${a.genres.join(", ")})`)
        .join("; ");

      postTopArtist(artistSummary)
        .then((data) => {
          setRoast(data.roast);
        })
        .catch((error) => console.log(error));
    }
  }, [topArtists]);

  return (
    <div className="mt-6 mb-6 flex justify-center max-w-screen px-4">
      <div className="justify-center items-center w-2xl">
        <h2 className="text-green-600 text-2xl font-bold text-center">Roast</h2>
        <p>{roast || "Analysing taste..."}</p>
      </div>
    </div>
  );
};

export default Roaster;
