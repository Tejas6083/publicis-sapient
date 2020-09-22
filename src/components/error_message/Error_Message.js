import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(5),
    "& > * + *": {
      margin: theme.spacing(5),
    },
  },
}));

const ErrorAlert = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error">
        {message}
      </Alert>
    </div>
  );
}

const InfoAlert = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="info">
        {message}
      </Alert>
    </div>
  );
}

export { InfoAlert, ErrorAlert };
