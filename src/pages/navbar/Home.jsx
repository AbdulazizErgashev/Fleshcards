import React from "react";
import Img from "../../img/img1.png";

export default function Home() {
  return (
    <div className="container flex items-center justify-around pt-20">
      <img
        src={Img}
        alt=""
        className="size-[25rem] border-4 border-[#8644A2] rounded-3xl"
      />
      <div className="flex flex-col gap-y-10">
        <h1 className="text-xl text-[#8644A2] font-black capitalize">
          do not learning new words
        </h1>
        <p className="text-sm w-[20rem] text-[#8644A2]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          excepturi et deserunt! Voluptatum in quam quis porro soluta cupiditate
          deserunt!
        </p>
      </div>
    </div>
  );
}
