import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/NavbarStyle';

export default function Navbar(props:any) {
	const theme = OurTheme.theme;
	const classes = Styles.useStyles();

	return (
		<div>
			<ThemeProvider theme ={theme}>
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