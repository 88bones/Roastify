import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTopTrack } from "../redux/slice";
import TrackRoast from "../components/TrackRoast";

const TopTracks = () => {
  const { accessToken, topTracks } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) return;

    axios
      .get(
        "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => dispatch(setTopTrack(res.data.items)))
      .catch((err) => console.error(err));
  }, [accessToken]);

  return (
    <>
      {topTracks.length > 0 && (
        <div className="mt-2 flex flex-col justify-center items-center">
          <h2 className="text-green-600 text-2xl font-bold">Top Tracks</h2>
          <ol className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 list-decimal list-inside">
            {topTracks.map((track) => (
              <li key={track.id} className="flex items-center mt-2 mb-2 px-4 ">
                <img
                  src={track.album.images?.[0]?.url}
                  alt={track.name}
                  className="w-12 h-12 rounded mr-3"
                />
                <div className="flex flex-col">
                  <span>{track.name}</span>
                  <span className="text-gray-400 text-xs">
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      <TrackRoast />
    </>
  );
};

export default TopTracks;
