import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const images = [{
  id: "10",
  label: "Keel-billed toucan",
  path: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Keel-billed_Toucan_%2816201157519%29.jpg"
}, {
  id: "20",
  label: "Rainbow_Lorikeet.",
  path: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rainbow_Lorikeet_%28Trichoglossus_moluccanus%29_at_Adelaide_Airport_1.jpg"
}, {
  id: "30",
  label: "Australian ringneck",
  path: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mallee_ringneck_42_-_Patchewollock.jpg/1920px-Mallee_ringneck_42_-_Patchewollock.jpg"
}, {
  id: "40",
  label: "Rainbow Lorikeet",
  path: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Atlantic_Puffin_Fratercula_arctica.jpg"
}, {
  id: "50",
  label: "Rainbow_Lorikeet.",
  path: "https://upload.wikimedia.org/wikipedia/commons/e/e0/BlueAndYellowMacaw_AraArarauna.jpg"
}, {
  id: "60",
  label: "Rainbow_Lorikeet.",
  path: "https://upload.wikimedia.org/wikipedia/commons/1/13/Trichoglossus_moluccanus_with_open_wings%2C_Brisbane.jpg"
}];
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
  containerMaxWidth: 800,
  containerRatio: 1.5,
  containerShadow: false,
  imageShadow: false,
  showNextPrev: true,
  serverData: images
})), document.getElementById("root"));
reportWebVitals();