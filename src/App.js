// imports
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Parasail from "./Parasail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  About,
  Accessories,
  Gallery,
  Events,
  Hotairballon,
} from "./utils";

//
const data1 = [
  {
    url: "parasail",
    name: "parasail",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
  {
    url: "accessories",
    name: "parasail accessories",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
  {
    url: "hotairballon",
    name: "hot air ballon",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
];
const data2 = [
  {
    url: "gallery",
    name: "gallery",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
  {
    url: "events",
    name: "events",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
  {
    url: "contact",
    name: "contact",
    img: "https://previews.123rf.com/images/vvoennyy/vvoennyy1408/vvoennyy140800521/30852380-canopy-of-parachute-for-parasailing-in-blue-sky.jpg",
  },
];

function Temp() {
  return (
    <div>
      <Banner data={data1} />
      <Banner data={data2} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Temp />} />
          <Route path="/about" element={<About />} />
          <Route path="/parasail" element={<Parasail />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/hotairballon" element={<Hotairballon />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
