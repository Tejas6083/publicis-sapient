import { makeStyles } from "@material-ui/core/styles";

const CardStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    background: theme.palette.secondary.light,
    borderRadius: 10,
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up("sm")]: {
      width: "30vw",
      height: "54vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "15vw",
      height: "39.5vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
      height: "36vw",
      maxWidth: 1440,
    },
  },

  contentText: {
    color: theme.palette.primary.dark,
  },
}));

export default CardStyle;
