import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "1%",
	},
	root: {
		width: '90%',
		margin: theme.spacing(1),
		color: "black",
	},
	ticketIcon: {
		display: "inline",
		fill: "black"
	},
	title: {
		fontSize: 16,
		color: "black",
	  	alignItems: "center",
	  	display: "inline",
		verticalAlign: "top",
		paddingLeft: "4px"
	},
	location: {
		fontSize: 16,
		color: "black",
		align: "right",
		display: "inline",
		verticalAlign: "top",
		paddingLeft: "30%"
	},
	columnright: {
		flexBasis: '100px',
	},
	columnleft: {
		flexBasis: '85.0%',
	},
	body: {
		display: "block"
	},
	buttonDiv: {
		marginTop: "5%",
	},
	button: {
		backgroundColor: "#2A667B",
		color: "#ffffff",

		"&:hover": {
			backgroundColor: "#357f9a"
		}
	},
	dialog: {
		color: "black"
	},
	text: {
        color: 'black',
    },
    check: {
        color: 'black',
    },
}));

export default {useStyles};