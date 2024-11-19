import React from "react";
import bannerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-center p-4 ">
      <figure className="border p-5 bg-transparent rounded-xl">
        <img
          className="h-[380px] w-[680px] object-cover rounded-xl"
          src={bannerImage}
          alt=""
        />
      </figure>
    </div>
  );
};

export default Banner;
