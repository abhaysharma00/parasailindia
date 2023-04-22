import React from "react";
import "./Container.css";
function Container({ data }) {
  return (
    <div className="box">
      <div className="container">{data[0].name}</div>
      <div className="container">{data[0].name}</div>
      <div className="container">{data[0].name}</div>
    </div>
  );
}

export default Container;

// const accessories=[
//     [{},{},{}]
//     [{},{},{}]
//     [{},{},{}]
//     [{},{},{}]
// ]
