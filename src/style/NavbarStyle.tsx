import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	appBar: {
		background: 'transparent',
		boxShadow:'none',
		color: "#ffffff"
	},
	title: {
	  	flexGrow: 1,
	  	fontSize: 40,
	  	fontWeight: 'bold'
	},
	pages: {
		fontSize: 18,
		marginRight: theme.spacing(2),
	},
	class: {
		paddingRight: 30,
		paddingLeft: 30,
	},
	text: {
		color: '#000000',
	},
}));  

export default {useStyles};
