import React, { Component } from "react";
import "./App.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import themes from "./styles/themes";
import ThemeContext from "./styles/themeContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CalculationForm from "./components/CalculationForm/CalculationForm";

class App extends Component {
  setTheme = (newTheme) => {
    this.setState((previousState) => {
      return {
        themeContext: {
          currentTheme: newTheme,
          setTheme: previousState.themeContext.setTheme,
        },
      };
    });
  };

  state = {
    themeContext: {
      currentTheme: themes.green,
      setTheme: this.setTheme,
    },
  };

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.themeContext}>
          <ThemeProvider theme={this.state.themeContext.currentTheme.muiTheme}>
            <CssBaseline />
            <NavigationBar />

            <Container fixed>
              <CalculationForm />
              <Button variant="contained" color="primary">
                OK
              </Button>
            </Container>
          </ThemeProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
