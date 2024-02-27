/** @format */

import React from "react";
import detail from "../assets/blog.svg";
import stats from "../assets/content.svg";
import strategy from "../assets/website.svg";
import global from "../assets/socialMedia.svg";

const Services = () => {
  return (
    <div id="Services" className="py-16 px-4">
      <h1 className=" text-center text-3xl sm:text-5xl font-bold mb-16 text-[#3ca1a8]">
        Our Services
      </h1>

      {/* CARD components */}
      <div className="flex justify-center sm:justify-between flex-wrap gap-8 text-slate-50">
        <div className="card w-60 bg-base-200 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={detail} alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Analyzation and Research of Land</h2>
          </div>
        </div>

        {/* 2.STATS AND DATA  */}
        <div className="card w-60 bg-base-200 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={stats} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Statics and Data of prices of crops</h2>
          </div>
        </div>

        {/* 3.STRATAGY AND CONNTENT */}
        <div className="card w-60 bg-base-200 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={strategy} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Content Strategy and Consulting</h2>
          </div>
        </div>

        {/* 4.GLOBAL MARKET */}

        <div className="card w-60 bg-base-200 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={global} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Social Media</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
