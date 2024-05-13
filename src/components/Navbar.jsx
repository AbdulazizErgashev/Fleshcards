import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            voca<span>bula</span>ry
          </Link>
          <ul className="grid grid-cols-3 items-center">
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/CommonWords">Common Words</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/EasyWords">Easy Words</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/MediumWords">Medium Words</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/MediumWords2">Medium Words 2</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/MediumWords3">Medium Words 3</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/HardWords">Hard Words</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/HardWords2">Hard Words 2</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/HardWords3">Hard Words 3</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/HardWords4">Hard Words 4</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="VeryHardWords">Very Hard Words</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="VeryHardWords2">Very Hard Words 2</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="VeryHardWords3">Very Hard Words 3</NavLink>{" "}
            </li>
          </ul>
          <div className="flex">
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/SignUp">SignUp</NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
