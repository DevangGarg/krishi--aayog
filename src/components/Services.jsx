/** @format */

import React from "react";
import detail from "../assets/logo images/logo7.jpeg";
import stats from "../assets/logo images/logo8.jpeg";
import strategy from "../assets/logo images/logo9.jpeg";
import global from "../assets/logo images/logo2.jpeg";

const Services = () => {
  return (
    <div id="Services" className="py-16 px-4">
      <h1 className=" text-center text-3xl sm:text-5xl font-bold mb-16 text-[#3ca1a8]">
        Our Services
      </h1>

      {/* CARD components */}
      <div className="flex justify-center sm:justify-between flex-wrap gap-8 text-slate-50">
        <div className="card w-60 bg-slate-900 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={detail} alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-white">Analyzation and Research of Land</h2>
          </div>
        </div>

        {/* 2.STATS AND DATA  */}
        <div className="card w-60 bg-slate-900 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={stats} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-white">Statistics and Data of crops</h2>
          </div>
        </div>

        {/* 3.STRATAGY AND CONNTENT */}
        <div className="card w-60 bg-slate-900 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={strategy} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-white">Guidance for higher yields</h2>
          </div>
        </div>

        {/* 4.GLOBAL MARKET */}

        <div className="card w-60 bg-slate-900 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10">
            <img src={global} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-white">Providing market to farmers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
