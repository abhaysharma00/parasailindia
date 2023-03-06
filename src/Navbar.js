import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="abovenavbar">
        <img src="logo.jpeg" alt="logo" className="logo" />
        <div className="name_container">
          <p className="company_name ">Hoval Parasail</p>
          <p className="subscript">sky is my home</p>
        </div>
        <div className="name_container">
          <p className="company_name small">An ISO :9001-2008</p>
          <p className="company_name small">certified company</p>
        </div>
      </div>

      <nav className="navbar">
        <ul className="unordered_list">
          <button className="list_items button2">
            <Link to="/">Home</Link>
          </button>
          <button className="list_items button2">
            <Link to="/about">About</Link>
          </button>
          <button className="list_items button2">
            <Link to="/parasail">Parasail</Link>
          </button>
          <button className="list_items button2">
            <Link to="/accessories">Parasail Accessories</Link>
          </button>
          <button className="list_items button2">
            <Link to="/otherproducts">Other products</Link>
          </button>
          <button className="list_items button2">
            <Link to="/gallery">Gallery</Link>
          </button>
          <button className="list_items button2">
            <Link to="/events">Events/Activities</Link>
          </button>
          <button className="list_items button2">
            <Link to="/contact">Contact</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
