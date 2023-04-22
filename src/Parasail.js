import React from "react";
import {
  parasailData1,
  parasailData2,
  parasailData3,
} from "./data/parasail.js";

// import "./Parasail.css";
import VideoPlayer from "./VideoPlayer.js";

function Container({ data }) {
  return (
    <>
      <div className="center">
        <div className="Banner">
          <div className=" common ">
            <img src={`${data[0].img}`} alt="" />
            <p>{data[0].Parasail_Model}</p>
            <p>{data[0].Feet}</p>
            <p>{data[0].Wind_Speed}</p>
            <p>{data[0].Weight}</p>
          </div>
          <div className=" common ">
            <img src={`${data[1].img}`} alt="" />
            <p>{data[1].Parasail_Model}</p>
            <p>{data[1].Feet}</p>
            <p>{data[1].Wind_Speed}</p>
            <p>{data[1].Weight}</p>
          </div>
          <div className=" common ">
            <img src={`${data[2].img}`} alt="" />
            <p>{data[2].Parasail_Model}</p>
            <p>{data[2].Feet}</p>
            <p>{data[2].Wind_Speed}</p>
            <p>{data[2].Weight}</p>
          </div>
        </div>
      </div>
    </>
  );
}
function Parasail() {
  return (
    <>
      <VideoPlayer />
      <h2>description</h2>
      <Container data={parasailData1} />
      <Container data={parasailData2} />
      <Container data={parasailData3} />
    </>
  );
}

export default Parasail;
