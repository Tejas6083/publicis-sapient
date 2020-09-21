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
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: theme.palette.secondary.main,
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: theme.palette.primary.main,
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: green[500],
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: theme.palette.primary.main,
      maxWidth: 1440,
    },
  },
}));

const ProgramCard = () => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProgramCard;
