import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({

	palette: {
	
	  action: {
		disabledBackground: "#ffffff",
		disabled: "#000000",
	  },
	  // Link when unclicked
	  primary: {
		main: "#ffffff",
	  },
	  secondary: {
		  main: "#d1dae3",
	  },
	  text: {
		// Input box when hovered over
		primary: "#ffffff",
		// Text in input box when unclicked
		secondary: "#ffffff",
	  },
	},
	typography: {
	  // Link and Input box text
	  fontFamily: "Quicksand",
	  fontSize: 16,
	},
});

const inverseTheme = createMuiTheme({

	palette: {
	  // Link when unclicked
	  primary: {
		main: "#000000",
	  },
	  text: {
		// Input box when hovered over
		primary: "#000000",
		// Text in input box when unclicked
		secondary: "#000000",
	  },
	},
	typography: {
	  // Link and Input box text
	  fontFamily: "Quicksand",
	  fontSize: 16,
	},
});


export default { theme, inverseTheme } 
