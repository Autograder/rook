import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import Styles from '../style/Styles';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = Styles.theme;

	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar position="static">
  					<Toolbar>
    					<Typography variant="h6" className={classes.title}>
      						autograder
   						</Typography>
    					<Button color="inherit">Login</Button>
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