import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    background: "linear-gradient(15deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: theme.spacing(1),
    marginBottom: "0.8%",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
