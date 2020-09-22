import { makeStyles } from "@material-ui/core/styles";

const CardStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up("sm")]: {
      width: "28vw",
      height: "54vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "13vw",
      height: "37vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
      height: "37vw",
      maxWidth: 1440,
    },
  },

  contentText: {
    color: theme.palette.primary.dark,
  },
}));

export default CardStyle;
