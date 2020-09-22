import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.light,
      minHeight: window.innerHeight,
      maxHeight: "auto"
    },
  }));

export default AppStyle;