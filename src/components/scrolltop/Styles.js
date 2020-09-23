import { makeStyles } from "@material-ui/core/styles";

const ScrollStyle = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(3),
  },
  colour: {
    color: "black",
    background: "default",
  },
}));

export default ScrollStyle;
