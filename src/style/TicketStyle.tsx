import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	root: {
		width: "60%",
		borderRadius: spacing(2),
		float: "left",
	},
	ticketIcon: {
		display: "inline",
		padding: "12px"
	},
	title: {
		fontSize: 16,
		color: "black",
	  	alignItems: "center",
	  	display: "inline",
		verticalAlign: "top",
		padding: "12px"
	},
	pos: {
	  marginBottom: 12,
	},
}));

export default {useStyles};