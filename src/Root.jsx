import React from "react";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Root = () => {
  return (
    <>
      <Toaster></Toaster>
      <div className="max-w-6xl mx-auto">
        <div>
          <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
        <div className="mt-12">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Root;
