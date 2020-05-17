import React, { Component } from "react";
import "./App.css";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import themes from "./styles/themes";
import ThemeContext from "./styles/themeContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CalculationForm from "./components/CalculationForm/CalculationForm";
import CalculationsTable from "./components/CalculationsTable/CalculationsTable";

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
    results: [],
  };

  addResult = (result) => {
    this.setState((previousState) => ({
      results: [result, ...previousState.results],
    }));
  };

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.themeContext}>
          <ThemeProvider theme={this.state.themeContext.currentTheme.muiTheme}>
            <CssBaseline />
            <NavigationBar />
            <Container fixed maxWidth="sm">
              <CalculationForm
                onCalculated={(result) => this.addResult(result)}
              />
              <CalculationsTable results={this.state.results} />
            </Container>
          </ThemeProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
