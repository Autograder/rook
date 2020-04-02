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

export default { theme } 
