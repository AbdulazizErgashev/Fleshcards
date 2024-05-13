import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#8644A2] text-[#eee]">
        <div className="container flex items-center justify-between py-5">
          <Link to="/" className="font-bold text-xl capitalize">
            vocabulary
          </Link>
          <ul className="flex gap-x-10 items-center opacity-70">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Fleshcards">Fleshcards</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-x-10">
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/SignUp">SignUp</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
