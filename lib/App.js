import React from "react";
import SlideShow from "./components/SlideShow";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(SlideShow, props), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 500,
      height: 1900
    }
  }));
};

export default App;