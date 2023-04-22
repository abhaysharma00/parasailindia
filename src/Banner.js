import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

// data3 [ {} , {} ,{} ]
// data2 [ {} , {} ,{} ]
// data3 [ {} , {} ,{} ]

// banner data={data1}

function Banner({ data }) {
  return (
    <div className="center">
      <div className="Banner">
        <Link to={`./${data[0].url}`}>
          <div className=" common ">
            <img src={`${data[0].img}`} alt="" />
            {data[0].name}
          </div>
        </Link>
        <Link to={`./${data[1].url}`}>
          <div className=" common ">
            <img src={`${data[1].img}`} alt="" />
            {data[1].name}
          </div>
        </Link>
        <Link to={`./${data[2].url}`}>
          <div className=" common ">
            <img src={`${data[2].img}`} alt="" />
            {data[2].name}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
