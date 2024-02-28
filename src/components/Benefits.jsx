/** @format */

import React from "react";

const Benefits = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 md:p-20">
        <div className="hero-content justify-around flex-col lg:flex-row">
          <div className="flex flex-col bg-[#204E51] p-4 sm:p-12 rounded-lg sm:w-1/2 gap-4 text-slate-50">
            {/* 1.  experience */}
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 bg-[#236c7256] rounded-full p-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <div>
                <h1 className=" font-bold text-3xl">1+</h1>
                <p className=" text-xs font-light">year of experience</p>
              </div>
            </div>

            {/* 2. PRODUCT  */}
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 bg-[#236c7256] rounded-full p-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>

              <div>
                <h1 className=" font-bold text-3xl">40+</h1>
                <p className=" text-xs font-light">happy farmers </p>
              </div>
            </div>
            {/* 3.CLIET  */}

            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 bg-[#236c7256] rounded-full p-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <div>
                <h1 className=" font-bold text-3xl">9M+</h1>
                <p className=" text-xs font-light">Profits Arranged</p>
              </div>
            </div>

            {/* 4.MEMBERS  */}
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 bg-[#236c7256] rounded-full p-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <div>
                <h1 className=" font-bold text-3xl">200+</h1>
                <p className=" text-xs font-light">Local Members</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="p-4 w-full">
            <h1 className=" text-3xl sm:text-5xl font-bold text-white">
              The Benefits of Choosing Our Expertise
            </h1>
            <p className="py-6 font-light sm:font-semibold text-white">
              As the demands on modern farmers continue to evolve, technology
              becomes paramount to minimizing stress while maximizing
              productivity and achieving farm profitability.
            </p>
            {// <button className="btn btn-sm md:btn btn-primary">
            //   Get Started
            // </button>
            }
          </div>
        </div>
      </div>
      {/* YOUTUBE VIDEO */}
      {
      // <div className="p-2 sm:p-4 flex justify-center items-center">
      //   <div className="block max-[700px]:hidden">
      //     <ReactPlayer controls:true url="https://www.youtube.com/watch?v=f90zh9NRErw" />
      //   </div>
      //   <div className="block max-[450px]:hidden min-[700px]:hidden">
      //     <ReactPlayer controls:true url="https://www.youtube.com/watch?v=f90zh9NRErw" width={400}/>
      //   </div>
      //   <div className="min-[450px]:hidden">
      //     <ReactPlayer controls:true url="https://www.youtube.com/watch?v=f90zh9NRErw" width={300}/>
      //   </div>
        
      // </div>
      }
    </div>
  );
};

export default Benefits;
