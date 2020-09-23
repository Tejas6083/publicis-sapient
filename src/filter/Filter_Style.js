import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    borderRadius: 20,
    background: "linear-gradient(45deg, #cc2b5e 30%, #753a88 90%)",
  },
  filter: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 16,
    textAlign: "left",
  },
  pos: {
    fontSize: 14,
    textAlign: "center",
  },
}));

export default useStyles;
