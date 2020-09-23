import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import CardStyle from "./Card_Style";

const styles = CardStyle;

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
          width = '256px'
          alt={mission_name}
          image={mission_patch}
          title={mission_name}
        />
        <CardContent
          className={classes.contentText}
          title={mission_name + " # " + flight_number}
        >
          <div>
            <Typography gutterBottom variant="inherit" component="h3">
              {mission_name} #{flight_number}
            </Typography>
          </div>

          <Typography gutterBottom variant="inherit" component="h4">
            Mission Ids:
          </Typography>

          {mission_id.length !== 0 ? (
            mission_id.map((id) => (
              <Typography
                variant="inherit"
                component="h5"
                key={launch_date + Math.random()}
              >
                <li>{id}</li>
              </Typography>
            ))
          ) : (
            <Typography variant="inherit" component="h5">
              No Id
            </Typography>
          )}

          <Typography variant="inherit" component="h4">
            Launch Year : {launch_year}
          </Typography>

          <Typography variant="inherit" component="h4">
            Successful Launch : {JSON.stringify(launch_success)}
          </Typography>

          <Typography variant="inherit" component="h4">
            Successful Landing :
          </Typography>
          {land_success.land_success === null ? (
            <Typography variant="inherit" component="h5">
              Not Available
            </Typography>
          ) : (
            <Typography variant="inherit" component="h5">
              {JSON.stringify(land_success.land_success)}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProgramCard;
