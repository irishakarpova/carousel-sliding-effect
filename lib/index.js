import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { images } from './images';
ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
  serverData: images,
  containerMaxWidth: 800,
  containerRatio: 1.5,
  containerShadow: true,
  imageShadow: true,
  showNextPrev: false
}))), document.getElementById('root'));
reportWebVitals();