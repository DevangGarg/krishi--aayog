/** @format */

import React from "react";
import bg from "../assets/bg-trator.jpg";
import crop from "../assets/Rectangle 10.png";
const Hero = () => {
  return (
    <div id="Home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://hips.hearstapps.com/hmg-prod/images/farm-quotes-1580917869.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
              The Role of Technology in Revolutionizing Agriculture
            </h1>
            <button className="btn btn-sm btn-success md:btn md:btn-success mr-2 ">
              Get Started
            </button>
            <button className="btn btn-outline text-slate-50  no-animation btn-sm md:btn-outline md:btn">
              Learn more
            </button>
          </div>
        </div>
        {/* 3. QR MAGE FOR WHATSAPP */}
        <div className="absolute mr-auto ml-auto bottom-4 sm:bottom-0 sm:right-0 sm:mr-4 sm:mb-4 w-40 h-40 bg-slate-50 opacity-20 rounded-lg">
            <img src="" />
        </div>
      </div>
      {/* PASSION SECTION  */}
      <div className="hero min-h-screen bg-base-200 md:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={crop} className="w-80 rounded-lg " />

          <div className="text-slate-50 md:p-4">
            <h1 className=" text-3xl md:text-5xl font-bold">
              Our Passion for Agriculture Nurturing Growth and Sustaining the
              Future
            </h1>
            <p className="py-6 text-slate-50">
              As the demands on modern farmers continue to evolve, technology
              becomes paramount to minimizing stress while maximizing
              productivity and achieving farm profitability.
            </p>
            <button className="btn btn-sm md:btn btn-success md:btn-success">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
