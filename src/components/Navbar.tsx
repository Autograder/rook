import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Typography } from '@material-ui/core';
import Styles from '../style/Styles';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
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
						<ExitToAppIcon></ExitToAppIcon>
  					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}

/*
    				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      					<MenuIcon />
					</IconButton>
					*/