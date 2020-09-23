import { withStyles, Button } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "secondary",
    background: "linear-gradient(45deg, #ee9ca7 25%, #ffdde1 90%)",
    borderRadius: 45,

    "&:hover": {
      color: theme.palette.primary.light,
      background: theme.palette.secondary.light,
    },
    "&:active": {
      boxShadow: "none",
      color: theme.palette.primary.light,
      background: theme.palette.secondary.light,
      border: "#005cbf",
    },
  },
}))(Button);

export default ColorButton;
