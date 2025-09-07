import React, { useEffect, useState } from "react";
import { postTopTrack } from "../services/getRoast";
import { useSelector, useDispatch } from "react-redux";
import { setTrackRoast } from "../redux/slice";

const Roaster = () => {
  const { topTracks, trackRoast } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    if (topTracks?.length > 0 && !trackRoast) {
      const simplifiedTracks = topTracks.map((track) => ({
        name: track.name,
        artists: track.artists.map((a) => a.name),
      }));

      const trackSummary = simplifiedTracks
        .map((t) => `${t.name} (${t.artists.join(", ")})`)
        .join("; ");

      postTopTrack(trackSummary)
        .then((data) => {
          dispatch(setTrackRoast(data.roast));
        })
        .catch((error) => {
          setError("Token limit reached! Try again after few minutes...");
          console.log(error);
        });
    }
  }, [topTracks, trackRoast]);

  return (
    <div className="mt-6 mb-6 flex justify-center max-w-screen px-4">
      <div className="justify-center items-center w-2xl">
        <h2 className="text-green-600 text-2xl font-bold text-center">Roast</h2>
        {error ? error : <p>{trackRoast || "Analysing taste..."}</p>}
      </div>
    </div>
  );
};

export default Roaster;
