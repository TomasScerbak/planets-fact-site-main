import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import Mercury from "./Pages/Mercury";
import Venus from "./Pages/Venus";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Mercury /> },
      { path: "Mercury", element: <Mercury /> },
      { path: "Venus", element: <Venus /> },
      { path: "Earth", element: <Earth /> },
      { path: "Mars", element: <Mars /> },
      { path: "Jupiter", element: <Jupiter /> },
      { path: "Saturn", element: <Saturn /> },
      { path: "Uranus", element: <Uranus /> },
      { path: "Neptune", element: <Neptune /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
