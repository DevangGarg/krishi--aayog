/** @format */

import React from "react";
import wheat from "../assets/wheat.jpeg";
import rice from "../assets/rice.jpeg";
import sugarcane from "../assets/sugarcane.jpg";
import pulses from "../assets/pulses.webp";

const Crops = () => {
  return (
    <div id="Crops" className="my-24">
      <h1 className=" text-center text-5xl font-bold mb-16 text-[#3eb6bf]">
        Crops
      </h1>

      <div className="flex justify-around flex-wrap gap-8">
        {/* CARD components */}
        <div className="card w-60  shadow-xl image-full">
          <figure>
            <img src={wheat} alt="wheat" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
              Wheat!
            </h2>
            <p>
              Wheat is one of the oldest cultivated plants in the world and has
              always been one of the most important staples for many countries.
            </p>
            <div className="card-actions justify-end   ">
              <button className="btn btn-sm btn-success md:btn md:btn-success ">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* 2.Rice  */}
        <div className="card w-60  shadow-xl image-full">
          <figure>
            <img src={rice} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
              Rice!
            </h2>
            <p>
              India is the world's second largest producer of rice after China.
            </p>
            <div className="card-actions justify-end   ">
              <button className="btn btn-sm btn-success md:btn md:btn-success ">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* 3.Sugarcane */}
        <div className="card w-60  shadow-xl image-full">
          <figure>
            <img src={sugarcane} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
              Sugarcane!
            </h2>
            <p>
              Sugarcane is a long duration crop that matures in 12–14 months.{" "}
            </p>
            <div className="card-actions justify-end   ">
              <button className="btn btn-sm btn-success md:btn md:btn-success ">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* 4.Pulses */}

        <div className="card w-60  shadow-xl image-full">
          <figure>
            <img src={pulses} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
              Pulses!
            </h2>
            <p>
              Pulse crops are part of the legume family, which contains over
              1,800 different species
            </p>
            <div className="card-actions justify-end   ">
              <button className="btn btn-sm btn-success md:btn md:btn-success ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" text-center font-semibold mt-16 underline cursor-pointer">
        See All Crops
      </h1>
    </div>
  );
};

export default Crops;
