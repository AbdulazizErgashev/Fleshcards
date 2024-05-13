import React from "react";
import { NavLink } from "react-router-dom";
// import { IoMdArrowRoundBack } from "react-icons/io";

export default function Fleshcards() {
  return (
    <div className="container">
      <h1 className="text-center pt-10 text-[#8644A2] font-bold text-2xl">Fleshcards</h1>
      <ul className="cards grid grid-cols-3 justify-items-center gap-y-5 pt-20 text-xl">
        <li>
          <NavLink to="/CommonWords" className="font-bold">
            Common Words
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="/EasyWords" className="font-bold">
            Easy Words
          </NavLink>
          <h1 className="opacity-70">51 words</h1>
        </li>
        <li>
          <NavLink to="/MediumWords" className="font-bold">
            Medium Words
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="/MediumWords2" className="font-bold">
            Medium Words 2
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="/MediumWords3" className="font-bold">
            Medium Words 3
          </NavLink>
          <h1 className="opacity-70">51 words</h1>
        </li>
        <li>
          <NavLink to="/HardWords" className="font-bold">
            Hard Words
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="/HardWords2" className="font-bold">
            Hard Words 2
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="/HardWords3" className="font-bold">
            Hard Words 3
          </NavLink>
          <h1 className="opacity-70">51 words</h1>
        </li>
        <li>
          <NavLink to="/HardWords4" className="font-bold">
            Hard Words 4
          </NavLink>
          <h1 className="opacity-70">51 words</h1>
        </li>
        <li>
          <NavLink to="VeryHardWords" className="font-bold">
            Very Hard Words
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="VeryHardWords2" className="font-bold">
            Very Hard Words 2
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
        <li>
          <NavLink to="VeryHardWords3" className="font-bold">
            Very Hard Words 3
          </NavLink>
          <h1 className="opacity-70">50 words</h1>
        </li>
      </ul>
    </div>
  );
}
