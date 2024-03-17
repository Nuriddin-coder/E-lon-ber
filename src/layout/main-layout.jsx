import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <header>{<Header />}</header>
        <main>{<Outlet />}</main>
      </div>
      <footer>{<Footer />}</footer>
    </div>
  );
};
