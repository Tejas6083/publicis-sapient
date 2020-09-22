import React from "react";
import useStyles from "./Header_Style";

const useStyle = useStyles;

const Header = () => {
  const classes = useStyle();

  return <div className={classes.root}>{"SpaceX Launch Programs"}</div>;
};

export default Header;
