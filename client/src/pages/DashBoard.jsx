import React, { useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import TopArtists from "../components/TopArtists";
import Roaster from "../components/Roaster";
import { Outlet } from "react-router-dom";
import MenuSelector from "../components/MenuSelector";
import { AppContext, AppProvider } from "../context/AppContext";

const Dashboard = ({ isOver }) => {
  const { accessToken } = useContext(AppContext);

  return (
    <>
      <Profile isOver={isOver} />
      <MenuSelector />
      <Outlet />
      {/* <Roaster topArtists={topArtists} setTopArtists={setTopArtists} /> */}
      <p className="px-4 text-gray-500 font-mono text-xs">
        *data based on last six months
      </p>
    </>
  );
};

export default Dashboard;
