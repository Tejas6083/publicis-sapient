import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilterCard from "../filter/Filter";
import ProgramCard from "../card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  items: {
    padding: '0 5px 5px',
  },
}));

const Homepage = () => {
  const array = [0, 1, 2, 3, 4, 5];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item xs={12} sm={4}>
          <FilterCard />
        </Grid>
        
        <Grid container align="center" item xs={12} sm={8}>
          {array.map((data) => (
            <Grid item className={classes.items} key={data} xs={12} sm={6} md={3} lg={12}>
                <ProgramCard />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </div>
  );
};

export default Homepage;
