import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YearFilter from "./Year_Filter";
import { Grid } from "@material-ui/core";
import CustomizedButtons from "../button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    padding: theme.spacing(1),
  },
  filter: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 16,
    textAlign: "left",
  },
  pos: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const FilterCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          FILTERS
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Launch Year
        </Typography>

        <div  className={classes.filter}>
          <YearFilter />
        </div>

        <Typography className={classes.pos} color="textSecondary">
          Successful Launch
        </Typography>

        <div className={classes.filter} >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CustomizedButtons name="True" />
            </Grid>
            <Grid item xs={6}>
              <CustomizedButtons name="False" />
            </Grid>
          </Grid>
        </div>

        <Typography className={classes.pos} color="textSecondary">
          Successful Landing
        </Typography>

        <div className={classes.filter} component="p">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CustomizedButtons name="True" />
            </Grid>
            <Grid item xs={6}>
              <CustomizedButtons name="False" />
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
