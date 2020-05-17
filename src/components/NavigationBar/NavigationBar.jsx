import React from "react";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Calculations
          </Typography>
          {/* <ThemeSelector /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
