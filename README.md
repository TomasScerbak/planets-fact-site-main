# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Routers

### What I learned

The main take away is working with React Router package and how to setup project with multiple pages.

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mercury from "./Pages/Mercury";
import Venus from "./Pages/Venus";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";
import Attribution from "./Components/Attribution";

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
      <Attribution />
    </BrowserRouter>
  );
}

export default App;
```

## Author

- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
