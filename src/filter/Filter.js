import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import YearFilter from "./Year_Filter";
import CustomizedButtons from "../components/button/Button";
import useStyles from "./Filter_Style";
import { connect } from "react-redux";
import fetchPosts from "../redux/spaceX/Fetch";

const FilterCard = ({ getEvents }) => {
  const classes = useStyles();

  const [useFetchValue, setFetchValue] = useState(null);

  useEffect(() => {
    async function fetch() {
      await getEvents(useFetchValue);
    }
    if (useFetchValue !== null) {
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
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            // color="textSecondary"
            gutterBottom
          >
            FILTERS
          </Typography>

          <Typography className={classes.pos}>Launch Year</Typography>

          <div className={classes.filter}>
            <YearFilter action={handleClick} value="launch_year" />
          </div>

          <Typography className={classes.pos}>Successful Launch</Typography>

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

          <Typography className={classes.pos}>Successful Landing</Typography>

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
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  getEvents: fetchPosts,
};

export default connect(null, mapDispatchToProps)(FilterCard);
