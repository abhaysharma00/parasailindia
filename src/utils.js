import React from "react";
import "./utils.css";
import Container from "./Container";
//
function Accessories() {
  return (
    <>
      <Container />
      <Container />
      <Container />
    </>
  );
}

//
function Contact() {
  return <div className="center">Contact</div>;
}
function About() {
  return <div className="center">About</div>;
}

function OtherProducts() {
  return <div className="center">OtherProducts</div>;
}
function Gallery() {
  return <div className="center">Gallery</div>;
}
function Events() {
  return <div className="center">Events</div>;
}
function Hotairballon() {
  return (
    <>
      <Container />
      <Container />
      <Container />
    </>
  );
}

export {
  Contact,
  About,
  Accessories,
  OtherProducts,
  Gallery,
  Events,
  Hotairballon,
};
