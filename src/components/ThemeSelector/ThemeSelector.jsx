import React, { useState, useContext } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ThemeContext from "../../styles/themeContext";
import themes from "../../styles/themes";

const ThemeSelector = () => {
  const themeContext = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (theme) => {
    themeContext.setTheme(theme);
    setAnchorEl(null);
  };

  return (
    <div className="theme-selector">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleToggle}
        variant="contained"
        color="secondary"
      >
        {themeContext.currentTheme.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {Object.keys(themes)
          .map((key) => themes[key])
          .map((theme) => (
            <MenuItem key={theme.name} onClick={() => handleSelect(theme)}>
              {theme.name}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default ThemeSelector;
