import React, { useState } from "react";

import Navbar from "../Components/Navbar";

import PlanetData from "../data.json";

import Planet from "../Assets/planet-mercury.svg";
import Internal from "../Assets/planet-mercury-internal.svg";
import Geology from "../Assets/geology-mercury.png";

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
              <button onClick={overviewHandler}>Overview</button>
              <button onClick={structureHandler}>Structure</button>
              <button onClick={surfaceHandler}>Surface</button>
            </div>
            <div className="planet-info-wrrapper">
              <h1>{PlanetData[0].name}</h1>
              {overview && (
                <>
                  <img alt="planet" src={Planet} />
                  <p>{`${PlanetData[0].overview.content}`}</p>
                  <a href={`${PlanetData[0].overview.source}`}>Wikipedia</a>
                </>
              )}
              {structure && (
                <>
                  <img alt="planet sctructure" src={Internal} />
                  <p>{`${PlanetData[0].structure.content}`}</p>
                  <a href={`${PlanetData[0].structure.source}`}>Wikipedia</a>
                </>
              )}
              {surface && (
                <>
                  <img src={Planet} alt="planet" />
                  <img alt="planet surface" src={Geology} />
                  <p>{`${PlanetData[0].geology.content}`}</p>
                  <a href={`${PlanetData[0].geology.source}`}>Wikipedia</a>
                </>
              )}
            </div>
            <div>
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
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Mercury;
