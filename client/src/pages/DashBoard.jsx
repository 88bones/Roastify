import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (!accessToken) return;

    // Fetch user profile
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));

    // Fetch top artists
    axios
      .get(
        "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=medium_term",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => setTopArtists(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Spotify Dashboard</h1>

        {profile ? (
          <div className="mt-4">
            <p>
              <strong>Name:</strong> {profile.display_name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <img
              src={profile.images?.[0]?.url}
              alt="profile"
              className="w-24 rounded-full mt-2"
            />
          </div>
        ) : (
          <p>Loading profile...</p>
        )}

        {topArtists.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Top Artists</h2>
            <ul className="mt-2">
              {topArtists.map((artist) => (
                <li key={artist.id} className="flex items-center mt-2">
                  <img
                    src={artist.images?.[0]?.url}
                    alt={artist.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <span>{artist.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
