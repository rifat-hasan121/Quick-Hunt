import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HomeLayouts = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default HomeLayouts;
