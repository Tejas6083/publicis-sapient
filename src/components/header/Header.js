import { CssBaseline } from "@material-ui/core";
import React from "react";
import useStyles from "./Header_Style";

const useStyle = useStyles;

const Header = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>{"SpaceX Launch Programs"}</div>
    </React.Fragment>
  );
};

export default Header;
