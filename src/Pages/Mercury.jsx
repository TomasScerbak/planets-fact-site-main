import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Planet from "../Assets/planet-mercury.svg";
import Internal from "../Assets/planet-mercury-internal.svg";
import Geology from "../Assets/geology-mercury.png";
import IconSource from "../Assets/icon-source.svg";

import "../index.css";

import PlanetData from "../data.json";

const Mercury = () => {
  const [overview, setOverView] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  const overviewHandler = () => {
    setOverView(true);

    if (structure) {
      setStructure(false);
    }
    if (surface) {
      setSurface(false);
    }
  };

  const structureHandler = () => {
    setStructure(true);

    if (overview) {
      setOverView(false);
    }
    if (surface) {
      setSurface(false);
    }
  };

  const surfaceHandler = () => {
    setSurface(true);

    if (structure) {
      setStructure(false);
    }
    if (overview) {
      setOverView(false);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <section>
          <div className="container">
            <div className="planet-buttons">
              <button className="btn btn--mercury" onClick={overviewHandler}>
                Overview
              </button>
              <button className="btn btn--mercury" onClick={structureHandler}>
                Structure
              </button>
              <button className="btn btn--mercury" onClick={surfaceHandler}>
                Surface
              </button>
            </div>
            {overview && (
              <>
                <div className="planet-image">
                  <img className="mercury" alt="planet" src={Planet} />
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[0].name}</h2>
                  <p>{`${PlanetData[0].overview.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[0].overview.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
            {structure && (
              <>
                <div className="planet-image">
                  <img className="mercury" alt="planet" src={Internal} />
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[0].name}</h2>
                  <p>{`${PlanetData[0].structure.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[0].structure.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
            {surface && (
              <>
                <div className="planet-image">
                  <div className="mercury-images">
                    <img
                      className="mercury-surface"
                      src={Planet}
                      alt="planet"
                    />
                    <img
                      className="mercury-surface-adhoc"
                      alt="planet surface"
                      src={Geology}
                    />
                  </div>
                </div>
                <div className="planet-info">
                  <h2>{PlanetData[0].name}</h2>
                  <p>{`${PlanetData[0].geology.content}`}</p>
                  <div className="source-wrapper">
                    <span className="source">Source : </span>
                    <a
                      className="source__link"
                      href={`${PlanetData[0].geology.source}`}
                    >
                      Wikipedia
                    </a>
                    <img className="source__image" src={IconSource} alt="#" />
                  </div>
                </div>
              </>
            )}
            {/* <div>
              <div>
                <h2>Rotation time:</h2>
                <div>{`${PlanetData[0].rotation}`}</div>
              </div>
              <div>
                <h2>Revolution time:</h2>
                {PlanetData[0].revolution}
              </div>
              <div>
                <h2>Radius:</h2>
                {PlanetData[0].radius}
              </div>
              <h2>Average temp.</h2>
              <div>{PlanetData[0].temperature}</div>
            </div> */}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Mercury;
