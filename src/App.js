import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mercury from "./Pages/Mercury";
import Venus from "./Pages/Venus";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mercury />}></Route>
        <Route path="Mercury" element={<Mercury />}></Route>
        <Route path="Venus" element={<Venus />}></Route>
        <Route path="Earth" element={<Earth />}></Route>
        <Route path="Mars" element={<Mars />}></Route>
        <Route path="Jupiter" element={<Jupiter />}></Route>
        <Route path="Saturn" element={<Saturn />}></Route>
        <Route path="Uranus" element={<Uranus />}></Route>
        <Route path="Neptune" element={<Neptune />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
