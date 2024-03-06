/** @format */

import React from "react";
import bg from "../assets/bg-trator.jpg";
import crop from "../assets/Rectangle 10.png";
import qrcode from "../assets/qr-code.png";
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
              कृषिलाभ - What, When, How to Grow and Where to sell to get maximum profits.
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
       { // <div className="absolute mr-auto ml-auto bottom-4 sm:bottom-0 sm:right-0 sm:mr-4 sm:mb-4 w-40 h-40 bg-slate-200 opacity-20 rounded-lg">
        //     <img src={qrcode} />
        // </div>
       }
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
              We bring information, knowledge methods and profit to the farmers
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
