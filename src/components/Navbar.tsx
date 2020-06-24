import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography, Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;
	const history = useHistory();

	function ChangeState(path:string) {
		history.push(path);
	}

	const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmit = () => {
        handleClose()
	}
	
	return (
		<div>
			<ThemeProvider theme={inverseTheme}>
				<Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
                    <DialogTitle className={classes.form} id="form-dialog-title">Submit Feedback</DialogTitle>
                    <DialogContent>
						<Typography className={classes.text}>Please let us know if you have suggestions to improve the site.</Typography>
						<TextField
							className={classes.text}
							variant="outlined"
							id="name"
							label="Title"
							fullWidth
						/>
						<br/>
						<TextField
							className={classes.text}
							variant="outlined"
							id="name"
							label="Feedback"
							multiline
							fullWidth
							rows="6"
						/>
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.form} onClick={handleSubmit} color="primary">Send</Button>
                    </DialogActions>
            	</Dialog>
			</ThemeProvider>
			<ThemeProvider theme={theme}>
				<AppBar position="static" className={classes.appBar}>
  					<Toolbar>
    					<Typography variant="h6" className={classes.title}>
							<Link underline="none" className={classes.link} onClick={() => (ChangeState('/queue'))}>queues</Link>
						</Typography>
						   
						<Typography variant="h6" className={classes.pages}>
      						<Link className={classes.link} onClick={() => {}}>Classes</Link>
   						</Typography>
						
						<Typography variant="h6" className={classes.pages}>
      						<Link className={classes.link} onClick={() => handleOpen()}>Submit Feedback</Link>
   						</Typography>

						<Typography variant="h6" className={classes.pages}>
							<Link className={classes.link} onClick={() => (ChangeState('/tickethistory'))}> Ticket History </Link>
						</Typography>
						
						<Link className={classes.link} onClick={() => (ChangeState('/login'))}> <ExitToAppIcon/> </Link>
  					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
