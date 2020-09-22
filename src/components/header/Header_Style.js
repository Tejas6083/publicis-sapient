import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: "inherit",
    padding: theme.spacing(1),
    marginBottom: "0.8%",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
