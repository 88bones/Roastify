import React, { useEffect, useState } from "react";
import { postTopArtist } from "../services/getRoast";

const Roaster = ({ topArtists }) => {
  const [roast, setRoast] = useState("");

  useEffect(() => {
    if (topArtists?.length > 0) {
      postTopArtist(topArtists)
        .then((data) => {
          setRoast(data.roast);
        })
        .catch((error) => console.log(error));
    }
  }, [topArtists]);

  return (
    <div>
      <h2>Your Roast:</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{roast || "Generating roast..."}</p>
    </div>
  );
};

export default Roaster;
