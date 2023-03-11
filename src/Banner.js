import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
function Banner({ data }) {
  console.log(data);
  return (
    <div className="Banner">
      <Link to={`/${data[0].url}`}>
        <div className=" common container1">{data[0].name}</div>
      </Link>
      <Link to={`/${data[1].url}`}>
        <div className=" common container1">{data[1].name}</div>
      </Link>
      <Link to={`/${data[2].url}`}>
        <div className=" common container1">{data[2].name}</div>
      </Link>
    </div>
  );
}

export default Banner;
