import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Attribution from "../Components/Attribution";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Attribution />
    </div>
  );
};

export default RootLayout;
