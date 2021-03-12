import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 850,
            lg: 950,
            xl: 1400
        }
    }
});

export default theme;
