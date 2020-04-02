import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
	  // Link when unclicked
	  primary: {
		main: '#ffffff',
	  },
	  text: {
		// Input box when hovered over
		primary: '#ffffff',
		// Text in input box when unclicked
		secondary: '#ffffff',
	  },
	},
	typography: {
	  // Link and Input box text
	  fontFamily: 'Quicksand',
	  fontSize: 16,
	},
});

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
		fontSize: 12,
		marginRight: theme.spacing(2),
	}
}));  

export default {theme, useStyles};