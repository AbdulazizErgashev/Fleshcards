import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CommonWords from "./pages/CommonWords";
import EasyWords from "./pages/EasyWords";
import MediumWords from "./pages/MediumWords";
import MediumWords2 from "./pages/MediumWords2";
import MediumWords3 from "./pages/MediumWords3";
import HardWords from "./pages/HardWords";
import HardWords2 from "./pages/HardWords2";
import HardWords3 from "./pages/HardWords3";
import HardWords4 from "./pages/HardWords4";
import VeryHardWords from "./pages/VeryHardWords";
import VeryHardWords2 from "./pages/VeryHardWords2";
import VeryHardWords3 from "./pages/VeryHardWords3";
import Login from "./pages/registeration/Login";
import SignUp from "./pages/registeration/SignUp";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/CommonWords" element={<CommonWords />} />
          <Route path="/EasyWords" element={<EasyWords />} />
          <Route path="/MediumWords" element={<MediumWords />} />
          <Route path="/MediumWords2" element={<MediumWords2 />} />
          <Route path="/MediumWords3" element={<MediumWords3 />} />
          <Route path="/HardWords" element={<HardWords />} />
          <Route path="/HardWords2" element={<HardWords2 />} />
          <Route path="/HardWords3" element={<HardWords3 />} />
          <Route path="/HardWords4" element={<HardWords4 />} />
          <Route path="/VeryHardWords" element={<VeryHardWords />} />
          <Route path="/VeryHardWords2" element={<VeryHardWords2 />} />
          <Route path="/VeryHardWords3" element={<VeryHardWords3 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}
