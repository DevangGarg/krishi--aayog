/** @format */

import React from "react";
import wheat from "../assets/wheat.jpeg";
import rice from "../assets/rice.jpeg";
import sugarcane from "../assets/sugarcane.jpg";
import pulses from "../assets/pulses.webp";
import { Carousel } from "react-bootstrap";
import Vid1 from '../videos/video1.mp4';
import Vid2 from '../videos/video2.mp4';
import Vid3 from '../videos/video3.mp4';
import Vid4 from '../videos/video4.mp4';
import Vid5 from '../videos/video5.mp4';
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import './Crops.css';


const Crops = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "Video of the farmer's feedback 1"
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video of the farmer's feedback 2"
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3,
      credit: "Video of the farmer's feedback 3"
    },
    {
      id: 4,
      title: "Video 4",
      src: Vid4,
      credit: "Video of the farmer's feedback 4"
    },
    {
      id: 5,
      title: "Video 5",
      src: Vid5,
      credit: "Video of the farmer's feedback 5"
    },
  ]

  return (
    <div id="Friends" className="bg-base-200 my-12">
      <h1 className=" text-center text-5xl font-bold mb-16 text-[#3eb6bf]">
        Our Friends
      </h1>
      <Carousel interval={null}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={false}
               />
            { //   <Carousel.Caption>
            //    <h3>{videoObj.title}</h3>
            //    <p>{videoObj.credit}</p>
            //  </Carousel.Caption>
            }
            </Carousel.Item>
          )
        })}
      </Carousel>

    {  // <div className="flex justify-around flex-wrap gap-8">
      //   {/* CARD components */}
      //   <div className="card w-60  shadow-xl image-full">
      //     <figure>
      //       <img src={wheat} alt="wheat" />
      //     </figure>
      //     <div className="card-body">
      //       <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
      //         Wheat!
      //       </h2>
      //       <p>
      //         Wheat is one of the oldest cultivated plants in the world and has
      //         always been one of the most important staples for many countries.
      //       </p>
      //       <div className="card-actions justify-end   ">
      //         <button className="btn btn-sm btn-success md:btn md:btn-success ">
      //           Learn more
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   {/* 2.Rice  */}
      //   <div className="card w-60  shadow-xl image-full">
      //     <figure>
      //       <img src={rice} alt="Shoes" />
      //     </figure>
      //     <div className="card-body">
      //       <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
      //         Rice!
      //       </h2>
      //       <p>
      //         India is the world's second largest producer of rice after China.
      //       </p>
      //       <div className="card-actions justify-end   ">
      //         <button className="btn btn-sm btn-success md:btn md:btn-success ">
      //           Learn more
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   {/* 3.Sugarcane */}
      //   <div className="card w-60  shadow-xl image-full">
      //     <figure>
      //       <img src={sugarcane} alt="Shoes" />
      //     </figure>
      //     <div className="card-body">
      //       <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
      //         Sugarcane!
      //       </h2>
      //       <p>
      //         Sugarcane is a long duration crop that matures in 12–14 months.{" "}
      //       </p>
      //       <div className="card-actions justify-end   ">
      //         <button className="btn btn-sm btn-success md:btn md:btn-success ">
      //           Learn more
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   {/* 4.Pulses */}

      //   <div className="card w-60  shadow-xl image-full">
      //     <figure>
      //       <img src={pulses} alt="Shoes" />
      //     </figure>
      //     <div className="card-body">
      //       <h2 className="card-title border-b-2 border-blue-300 text-slate-50">
      //         Pulses!
      //       </h2>
      //       <p>
      //         Pulse crops are part of the legume family, which contains over
      //         1,800 different species
      //       </p>
      //       <div className="card-actions justify-end   ">
      //         <button className="btn btn-sm btn-success md:btn md:btn-success ">
      //           Learn more
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div> 
    }
    </div>
  );
};

export default Crops;
