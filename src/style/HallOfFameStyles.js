import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  center: {
    textAlign: "center"
  },
  text: {
    marginTop: "60px"
  },
  button: {
    marginTop: "10px"
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