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
	  	fontSize: 30,
	  	fontWeight: 'bold'
	},
	pages: {
		fontSize: 14,
		marginRight: theme.spacing(2),
	}
}));  

export default {useStyles};
