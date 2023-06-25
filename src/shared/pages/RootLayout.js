import React from "react";
import MainNavigation from "../components/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main style={{ margintop: "5rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
