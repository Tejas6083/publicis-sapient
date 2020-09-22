import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up("sm")]: {
      // maxWidth: 345,
      width: '28vw',
      height: '54vw'
    },
    [theme.breakpoints.up("md")]: {
      // maxWidth: 200,
      width: '13vw',
      height: '37vw'
    },
    [theme.breakpoints.up("lg")]: {
      // width: 500,
      width: '25vw',
      height: '37vw',
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
          // height= '420'
          alt={mission_name}
          image={mission_patch}
          title={mission_name}
        />
        <CardContent title={mission_name + " # " + flight_number}>
          <div  variant="body1">
            <Typography gutterBottom variant="h2"component="h1" noWrap></Typography>
            {mission_name} #{flight_number}
          </div>

          <div variant="body1">
            Mission Ids:
            {mission_id.length !== 0 ? (
              mission_id.map((id) => (
                <Typography variant="body2" key={launch_date + Math.random()}>
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
