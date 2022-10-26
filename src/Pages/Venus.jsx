import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import Planet from "../Assets/planet-venus.svg";
import Internal from "../Assets/planet-venus-internal.svg";
import Geology from "../Assets/geology-venus.png";

import "../index.css";

import PlanetData from "../data.json";

const Venus = () => {
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
              <button onClick={overviewHandler}>Overview</button>
              <button onClick={structureHandler}>Structure</button>
              <button onClick={surfaceHandler}>Surface</button>
            </div>
            <div className="planet-info-wrrapper">
              {overview && (
                <>
                  <img alt="planet" src={Planet} />
                  <h2>{PlanetData[1].name}</h2>
                  <p>{`${PlanetData[1].overview.content}`}</p>
                  <a href={`${PlanetData[1].overview.source}`}>Wikipedia</a>
                </>
              )}
              {structure && (
                <>
                  <img alt="planet sctructure" src={Internal} />
                  <h2>{PlanetData[1].name}</h2>
                  <p>{`${PlanetData[1].structure.content}`}</p>
                  <div>
                    <span className="source">Source:</span>
                    <a
                      className="source-link"
                      href={`${PlanetData[1].structure.source}`}
                    >
                      Wikipedia
                    </a>
                  </div>
                </>
              )}
              {surface && (
                <>
                  <img src={Planet} alt="planet" />
                  <img alt="planet surface" src={Geology} />
                  <h2>{PlanetData[1].name}</h2>
                  <p>{`${PlanetData[1].geology.content}`}</p>
                  <a href={`${PlanetData[1].geology.source}`}>Wikipedia</a>
                </>
              )}
            </div>
            <div>
              <div>
                <h2>Rotation time:</h2>
                <div>{`${PlanetData[1].rotation}`}</div>
              </div>
              <div>
                <h2>Revolution time:</h2>
                {PlanetData[1].revolution}
              </div>
              <div>
                <h2>Radius:</h2>
                {PlanetData[1].radius}
              </div>
              <h2>Average temp.</h2>
              <div>{PlanetData[1].temperature}</div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Venus;
