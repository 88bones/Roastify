import { React, useState, useEffect } from "react";
import axios from "axios";

const TopArtists = ({ accessToken, topArtists, setTopArtists }) => {
  useEffect(() => {
    if (!accessToken) return;
    axios
      .get(
        "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=medium_term",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => setTopArtists(res.data.items))
      .catch((err) => console.error(err));
  }, [accessToken]);

  return (
    <>
      {topArtists.length > 0 && (
        <div className="mt-2 flex flex-col justify-center items-center">
          <h2 className="text-green-600 text-2xl font-bold">Top Artists</h2>
          <ol className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 list-decimal list-inside">
            {topArtists.map((artist) => (
              <li key={artist.id} className="flex items-center mt-2 mb-2 px-4 ">
                <img
                  src={artist.images?.[0]?.url}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span>{artist.name}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
export default TopArtists;
