import React, { useEffect } from "react";
import Profile from "../components/Profile";
import MenuSelector from "../components/MenuSelector";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../redux/slice";

const Dashboard = ({ isOver }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.spotify.accessToken);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("access_token");
    if (urlToken) {
      dispatch(setAccessToken(urlToken));
      window.history.replaceState({}, document.title, "/dashboard");
    }
  }, [dispatch]);

  return (
    <>
      <Profile isOver={isOver} />
      <MenuSelector />
      <Outlet />
      <p className="px-4 text-gray-500 font-mono text-xs">
        *data based on last six months
      </p>
    </>
  );
};

export default Dashboard;
