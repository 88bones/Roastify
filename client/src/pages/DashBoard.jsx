import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import TopArtists from "../components/TopArtists";

const Dashboard = ({ accessToken }) => {
  return (
    <>
      <NavBar />
      <Profile accessToken={accessToken} />
      <TopArtists accessToken={accessToken} />
    </>
  );
};

export default Dashboard;
