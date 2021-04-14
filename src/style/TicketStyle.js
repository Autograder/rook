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
	},
	locationfield: {
		marginBottom: '20px'
	},
	table: {
		display: "table",
		width: "100%"
	},
	tableRow: {
		display: "table-row",
	},
	tableLeft: {
		display: "table-cell",
	},
	tableRight: {
		display: "table-cell",
		textAlign: "right"
	},
	body: {
		display: "block"
	},
	buttonDiv: {
		marginTop: "5%",
	},
	editButton: {
		backgroundColor: "#2A667B",
		color: "#ffffff",
		"&:hover": {
			backgroundColor: "#357f9a"
		},
		marginRight: "10px"
	},
	acceptButton: {
		backgroundColor: "#003D32",
		color: "#ffffff",
		"&:hover": {
			backgroundColor: "#006653"
		},
		marginRight: "10px"
	},
	cancelButton: {
		backgroundColor: "#3A3335",
		color: "#ffffff",
		"&:hover": {
			backgroundColor: "#615659"
		},
		marginRight: "10px"
	},
	chatButton: {
		backgroundColor: "#1E385C",
		color: "#ffffff",
		"&:hover": {
			backgroundColor: "#2D548B"
		},
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