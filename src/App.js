import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mercury from "./Pages/Mercury";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mercury />}></Route>
        <Route path="venus" element={<h1>venus</h1>}></Route>
        <Route path="earth" element={<h1>earth</h1>}></Route>
        <Route path="mars" element={<h1>mars</h1>}></Route>
        <Route path="jupiter" element={<h1>jupiter</h1>}></Route>
        <Route path="saturn" element={<h1>saturn</h1>}></Route>
        <Route path="uranus" element={<h1>uranus</h1>}></Route>
        <Route path="neptune" element={<h1>neptune</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
