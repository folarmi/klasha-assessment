import React from "react";
import { Navbar } from "./Navbar";

const Sidebar = () => {
  return (
    <div className="bg-lightAsh fixed z-50 h-screen w-full pl-10">
      <Navbar />
    </div>
  );
};

export { Sidebar };
