import React from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const history = useHistory();

	function ChangeState(path:string) {
		history.push(path);
	}
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar position="static" className={classes.appBar}>
  					<Toolbar>
    						<Typography variant="h6" className={classes.title}>
								<Link onClick={() => (ChangeState('/queue'))}>queues</Link>
							</Typography>
						
						<Typography variant="h6" className={classes.pages}>
      						Classes
   						</Typography>
						
						<Typography variant="h6" className={classes.pages}>
							<Link onClick={() => (ChangeState('/tickethistory'))}> Ticket History </Link>
						</Typography>
						
						<Link onClick={() => (ChangeState('/login'))}> <ExitToAppIcon/> </Link>
  					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
