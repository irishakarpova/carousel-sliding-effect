import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SlideShow from "./components/SlideShow";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { AppStateValue } from "./components/appStateValue";

const App = (props: AppStateValue) => {
    return (
        <ThemeProvider theme={theme}>
            <SlideShow {...props} />
            <div style={{ width: 500, height: 1900 }}></div>
        </ThemeProvider>
    );
};

export default App;
