import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    opacity: 0.3,
    background: theme.palette.secondary.footer,
    height: 50,
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    position: "center",
    // color: theme.palette.primary.dark,
    color: "#a0d2eb",
    opacity: 1,
    zIndex: 2,
    left: 0,
    right: 0,
    margin: "0 auto",
    marginBottom: "10px",
  },
}));

export default useStyles;
