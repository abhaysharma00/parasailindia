// imports
import "./App.css";
import Navbar from "./Navbar";
import VideoPlayer from "./VideoPlayer";
import Banner from "./Banner";
import Footer from "./Footer";
import Parasail from "./Parasail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  About,
  Accessories,
  OtherProducts,
  Gallery,
  Events,
  Hotairballon,
} from "./utils";

//
const data = [
  [
    { url: "parasail", name: "parasail" },
    { url: "parasail", name: "parasail" },
    { url: "parasail", name: "parasail" },
  ],
];
function Temp() {
  return (
    <div>
      <VideoPlayer />
      {data.map((val) => {
        <Banner data={val} />;
      })}
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
          <Route path="/otherproducts" element={<OtherProducts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotairballon" element={<Hotairballon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
