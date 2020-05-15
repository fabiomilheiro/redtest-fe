import { createMuiTheme } from "@material-ui/core";

const themes = {
  green: {
    name: "Green",
    muiTheme: createMuiTheme({
      palette: {
        primary: {
          main: "#004d40",
        },
        secondary: {
          main: "#00796b",
        },
      },
    }),
  },
  red: {
    name: "Red",
    muiTheme: createMuiTheme({
      palette: {
        primary: {
          main: "#b71c1c",
        },
        secondary: {
          main: "#c62828",
        },
      },
    }),
  },
  blue: {
    name: "Blue",
    muiTheme: createMuiTheme({
      palette: {
        primary: {
          main: "#1a237e",
        },
        secondary: {
          main: "#1565c0",
        },
      },
    }),
  },
};

export default themes;
