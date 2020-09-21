import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginBottom: "0.8%",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    color: "green",
  },
}));

const Header = () => {
  const classes = useStyles();

  return <div className={classes.root}>{"SpaceX Launch Programs"}</div>;
};

export default Header;
