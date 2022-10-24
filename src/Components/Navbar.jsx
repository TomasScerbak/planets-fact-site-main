import React, { useState } from "react";

import HamburgerIcon from "../Assets/icon-hamburger.svg";
import ChevronImage from "../Assets/icon-chevron.svg";
import "./Navbar.css";

import PlanetData from "../data.json";

const planetName = PlanetData.map((planet) => planet.name);

const Navbar = () => {
  const [visible, setIsVisible] = useState(false);

  const isVisibleHandler = () => {
    setIsVisible((prev) => (!prev ? true : false));
  };

  return (
    <section>
      <header>
        <nav className="navbar">
          <div className="title-wrapper">
            <h1>The Planets</h1>
            <img
              onClick={isVisibleHandler}
              className={`${"hamburger-icon"} ${
                visible ? "hamburger--active" : ""
              }`}
              src={HamburgerIcon}
              alt="menu icon"
            />
          </div>
          <ul className={`${"planet-list"} ${visible ? "visible" : ""}`}>
            {PlanetData.map((planet) => {
              return (
                <li className="nav-list" key={planet.name}>
                  <div
                    className={`${planetName ? planet.name : ""} ${"orb"}`}
                  ></div>
                  <h4>{planet.name}</h4>
                  <img className="chevron" src={ChevronImage} alt="#" />
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
