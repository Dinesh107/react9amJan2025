import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shape from "./components/Shape.jsx";
import ShapeStoreRoom from "./components/StoreRoom.jsx";
import Garage from "./components/Garage.jsx";
import FavoriteColor from "./components/FavoriteColor.jsx";
import Bike from "./components/Bike.jsx";
import Timer from "./components/Timer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <ShapeStoreRoom/> */}
    {/* <Garage/> */}
    {/* <FavoriteColor/> */}
    {/* <Bike /> */}
    <Timer/>
  </>
);
