import React from "react";
import parasail_data from "./data/parasail.js";
import "./Parasail.css";
function Container({ data }) {
  return (
    <div className="center">
      {
        <div className="parasail_container">
          <div className="parasail_info">
            <p>
              <b> Parasail_Model </b> :{data.Parasail_Model}
            </p>
            <p>
              <b>Parasail_Canopy</b>
              {data.Parasail_Canopy}
            </p>
            <p>
              <b> Colour </b>
              {data.Colour}
            </p>
            <p>
              <b> Load</b>
              {data.Load}
            </p>
            <p>
              <b> Fabric </b>
              {data.Fabric}
            </p>
            <p>
              <b> Yoke_Attach </b>
              {data.Yoke_Attach}
            </p>
            <p>
              <b> Hardware </b>
              {data.Hardware}
            </p>
            <p>
              <b> Tow_Rope_Type </b>
              {data.Tow_Rope_Type}
            </p>
            <p>
              <b>Tow_Rope_Length </b>
              {data.Tow_Rope_Length}
            </p>
            <p>
              <b> Harness_Type </b>
              {data.Harness_Type}
            </p>
            <p>
              <b> Carry_Bag_Material </b>
              {data.Carry_Bag_Material}
            </p>
            <p>
              <b> Carabineer_Type</b>
              {data.Carabineer_Type}
            </p>
          </div>
          <div className="parasail_image">
            <img
              src="./images/parasail/falcon 24feet.jpeg"
              alt="falcon 24feet"
            />
          </div>
        </div>
      }
    </div>
  );
}
function Parasail() {
  return (
    <div>
      {parasail_data.map((data) => (
        <>
          <Container data={data} />
        </>
      ))}
    </div>
  );
}

export default Parasail;
