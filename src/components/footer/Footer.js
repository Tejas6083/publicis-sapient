import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./Footer_style";

const FooterBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.text} variant="body2" gutterBottom>
            [ Developer - TEJAS R ]
          </Typography>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default FooterBar;
