import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import TopArtists from "../components/TopArtists";
import Roaster from "../components/Roaster";

const Dashboard = ({ accessToken, topArtists, setTopArtists }) => {
  return (
    <>
      <NavBar />
      <Profile accessToken={accessToken} />
      <TopArtists
        accessToken={accessToken}
        topArtists={topArtists}
        setTopArtists={setTopArtists}
      />
      <Roaster topArtists={topArtists} setTopArtists={setTopArtists} />
    </>
  );
};

export default Dashboard;
