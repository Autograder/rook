import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Typography } from '@material-ui/core';
import navbarStyle from '../style/NavbarStyles';
import Styles from '../style/Styles';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = navbarStyle();
	const theme = Styles.theme;
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar position="static" className={classes.appBar}>
  					<Toolbar>
    					<Typography variant="h6" className={classes.title}>
      						autograder
   						</Typography>
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