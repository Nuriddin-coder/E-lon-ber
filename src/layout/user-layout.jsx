import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../lib/local-storage";

///// Import Img's:

export const UserLayout = () => {
  const user = loadState("user");

  if (!user) return <Navigate to="/" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

{
  /* <div>
          <Link className="bg-slate-400" to="/user">
            Profile
          </Link>
          <Link className="bg-slate-400" to="/user/address">
            Address
          </Link>
        </div> */
}
