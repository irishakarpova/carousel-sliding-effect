import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SlideShow from "./components/SlideShow";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(SlideShow, props));
};

export default App;