import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProgramCard from "../card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    alignItems: "center",
  },
}));

const ListView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProgramCard />
    </div>
  );
};

export default ListView;
