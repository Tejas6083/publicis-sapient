import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YearFilter from "./Year_Filter";
import { Grid } from "@material-ui/core";
import CustomizedButtons from "../button/Button";
import { connect } from "react-redux";

import fetchPosts from "../redux/spaceX/Fetch";

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

const FilterCard = ({ getEvents }) => {
  const classes = useStyles();

  const [useFetchValue, setFetchValue] = useState(null);

  useEffect(() => {
    async function fetch() {
      await getEvents(useFetchValue);
    }
    if (useFetchValue !== null) {
      console.log("In Filter.js", useFetchValue);
      fetch();
    }
  }, [useFetchValue, getEvents]);

  const handleClick = (e, name) => {
    e.preventDefault();

    name = name.toLowerCase().trim();
    switch (e.currentTarget.value) {
      case "launch_success":
        setFetchValue({
          ...useFetchValue,
          launch_success: "&" + e.currentTarget.value + "=" + name,
        });
        break;
      case "land_success":
        setFetchValue({
          ...useFetchValue,
          land_success: "&" + e.currentTarget.value + "=" + name,
        });
        break;
      case "launch_year":
        setFetchValue({
          launch_year: "&" + e.currentTarget.value + "=" + name,
        });
        break;
      case "clear":
        setFetchValue("");
        break;
      default:
        setFetchValue({ ...useFetchValue });
    }
  };

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

        <div className={classes.filter}>
          <YearFilter action={handleClick} value="launch_year" />
        </div>

        <Typography className={classes.pos} color="textSecondary">
          Successful Launch
        </Typography>

        <div className={classes.filter}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CustomizedButtons
                name="True"
                value="launch_success"
                action={handleClick}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomizedButtons
                name="False"
                value="launch_success"
                action={handleClick}
              />
            </Grid>
          </Grid>
        </div>

        <Typography className={classes.pos} color="textSecondary">
          Successful Landing
        </Typography>

        <div className={classes.filter} component="p">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CustomizedButtons
                name="True"
                value="land_success"
                action={handleClick}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomizedButtons
                name="False"
                value="land_success"
                action={handleClick}
              />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <CustomizedButtons
                name="Clear All Filters"
                value="clear"
                action={handleClick}
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = {
  getEvents: fetchPosts,
};

export default connect(null, mapDispatchToProps)(FilterCard);
