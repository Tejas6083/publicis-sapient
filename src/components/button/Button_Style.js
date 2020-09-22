import { withStyles, Button } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "secondary",
    backgroundColor: theme.palette.primary.light,
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    borderRadius: 45,

    "&:hover": {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.secondary.light,
    },
    "&:active": {
      boxShadow: "none",
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.secondary.light,
      borderColor: "#005cbf",
    },
  },
}))(Button);

export default ColorButton;
