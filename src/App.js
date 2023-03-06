import "./App.css";
import Navbar from "./Navbar";
import VideoPlayer from "./VideoPlayer";
import Banner from "./Banner";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  About,
  Parasail,
  Accessories,
  OtherProducts,
  Gallery,
  Events,
} from "./utils";
function Temp() {
  return (
    <div>
      <VideoPlayer />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
