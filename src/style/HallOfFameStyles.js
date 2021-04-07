import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  body: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  center: {
    textAlign: "center"
  },
  text: {
    marginTop: "30px"
  },
  button: {
    marginTop: "25px"
  },
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: "3em",
    marginTop: "8px",
    marginBottom: "20px"
	},
}));

export default {useStyles};