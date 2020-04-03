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
		'border-radius': '15px',
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
	heading: {
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	name: {
		color: "black",
		paddingLeft: "6px"
	},
	location: {
		display: "inline-block",
		fontSize: 16,
		textAlign: 'right',
		float: "right"
	}

}));

export default {useStyles};