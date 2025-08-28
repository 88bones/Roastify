import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (accessToken) {
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
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
    </div>
  );
};

export default Dashboard;
