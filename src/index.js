import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import { images } from './images';

ReactDOM.render(
    <ThemeProvider  theme={theme}>
      <React.StrictMode>
          <App
              serverData={images}
              containerMaxWidth={800}
              containerRatio={1.5}
              containerShadow={false}
              imageShadow={false}
              showNextPrev={false}
           />
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
