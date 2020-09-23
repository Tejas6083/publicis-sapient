import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    minHeight: window.innerHeight,
    maxHeight: "auto",
  },
}));

export default AppStyle;
