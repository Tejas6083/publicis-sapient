import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    borderRadius: 20,
    backgroundColor: "#12343b",
  },
  filter: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 16,
    textAlign: "left",
    color: theme.palette.secondary.dark,
  },
  pos: {
    fontSize: 14,
    textAlign: "center",
    color: theme.palette.secondary.dark,
  },
}));

export default useStyles;
