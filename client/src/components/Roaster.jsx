import React, { useEffect, useState, useContext } from "react";
import { postTopArtist } from "../services/getRoast";
import { useSelector, useDispatch } from "react-redux";
import { setArtistRoast } from "../redux/slice";

const Roaster = () => {
  const { topArtists, artistRoast } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    if (topArtists?.length > 0 && !artistRoast) {
      const simplifiedArtist = topArtists.map((artist) => ({
        name: artist.name,
        genres: artist.genres,
      }));

      const artistSummary = simplifiedArtist
        .map((a) => `${a.name}(${a.genres.join(", ")})`)
        .join("; ");

      postTopArtist(artistSummary)
        .then((data) => {
          dispatch(setArtistRoast(data.roast));
        })
        .catch((error) => {
          setError("Token limit reached! Try again after few minutes...");
          console.log(error);
        });
    }
  }, [topArtists, artistRoast]);

  return (
    <div className="mt-6 mb-6 flex justify-center max-w-screen px-4">
      <div className="justify-center items-center w-2xl">
        <h2 className="text-green-600 text-2xl font-bold text-center">Roast</h2>
        {error ? error : <p>{artistRoast || "Analysing taste..."}</p>}
      </div>
    </div>
  );
};

export default Roaster;
