import { React, useState, useEffect } from "react";
import axios from "axios";
import BurgerMenu from "./BurgerMenu";

const Profile = ({ accessToken, isOver }) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (!accessToken) return;

    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute z-10 right-0 top-20">
        {isOver == true ? (
          <div className="md:hidden">
            <BurgerMenu />
          </div>
        ) : (
          ""
        )}
      </div>

      {profile ? (
        <div className="mt-4 ">
          <img
            src={profile.images?.[0]?.url}
            alt="profile"
            className="w-24 rounded-full mt-2"
          />
          <p className="px-6 py-2">
            <strong>{profile.display_name}</strong>
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
