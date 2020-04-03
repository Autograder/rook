import React from 'react';
import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar position="static" className={classes.appBar}>
  					<Toolbar>
    					<Link href="/login" variant="h6" className={classes.title}>
      						autograder
   						</Link>
						<Typography variant="h6" className={classes.pages}>
      						Classes
   						</Typography>
						<Typography variant="h6" className={classes.pages}>
      						Ticket History
   						</Typography>
						<ExitToAppIcon/>
  					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
