import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import { green } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    // width: 220,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 345,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 345,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 200,
    },
    [theme.breakpoints.up("lg")]: {
      width: 300,
      maxWidth: 1440,
    },
  },
}));

const ProgramCard = ({
  mission_patch,
  mission_name,
  flight_number,
  mission_id,
  launch_date,
  launch_year,
  launch_success,
  land_success,
}) => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={mission_name}
          image={mission_patch}
          title={mission_name}
        />
        <CardContent title={mission_name + " # " + flight_number}>
          <div variant="body1">
            <Typography gutterBottom variant="body1" noWrap></Typography>
            {mission_name}#{flight_number}
          </div>

          <div variant="body1">
            Mission Ids:
            {mission_id.length !== 0 ? (
              mission_id.map((id) => (
                <Typography variant="body2" key={launch_date + mission_name}>
                  <li variant="body2">{id}</li>
                </Typography>
              ))
            ) : (
              <Typography variant="body2">No Id</Typography>
            )}
          </div>

          <Typography variant="body2">Launch Year : {launch_year}</Typography>

          <Typography variant="body2">
            Successful Launch : {JSON.stringify(launch_success)}
          </Typography>

          <div variant="body2">
            Successful Landing :{" "}
            {land_success.land_success === null ? (
              <Typography variant="body2">Not Available </Typography>
            ) : (
              JSON.stringify(land_success.land_success)
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProgramCard;
