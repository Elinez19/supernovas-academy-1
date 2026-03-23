import React from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-[100]">
      <TopBar />
      <MainNav />
      <AnnouncementBar />
    </header>
  );
};

export default Navbar;
