import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilterCard from "../filter/Filter";
import ProgramCard from "../card/Card";

import { connect } from "react-redux";
import fetchPosts from "../redux/spaceX/Fetch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  items: {
    padding: "0 5px 5px",
  },
}));

const Homepage = ({ eventsList, Error, Loading, getEvents }) => {
  const classes = useStyles();

  useEffect(() => {
    async function foo() {
      let address;
      await getEvents();
      console.log(address,Homepage);
    }
    foo();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <FilterCard />
        </Grid>

        <Grid container align="center" item xs={12} sm={8}>
          {Loading ? (
            <div>
              {Loading} <h1>bcb dsc sdc snbcn cb sdc bd</h1>
            </div>
          ) : Error ? (
            <div> {Error} </div>
          ) : (
            eventsList.map((data) => (
              <Grid
                item
                className={classes.items}
                key={data.flight_number}
                xs={12}
                sm={6}
                md={3}
                lg={12}
              >
                <ProgramCard
                  mission_patch={data.links.mission_patch_small}
                  mission_name={data.mission_name}
                  flight_number={data.flight_number}
                  mission_id={data.mission_id}
                  launch_date={data.launch_date_local}
                  launch_year={data.launch_year}
                  launch_success={data.launch_success}
                  land_success={data.rocket.first_stage.cores[0]}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  eventsList: state.event.eventsList,
  Error: state.event.error,
  Loading: state.event.loading,
});

const mapDispatchToProps = {
  getEvents: fetchPosts,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Homepage);
