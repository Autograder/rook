import React from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField, Toolbar, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';
import Styles from '../style/NavbarStyle';

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleClose = (event?:any) => {
		setOpen(false);
	};

	function handleListKeyDown(event:any) {
		if (event.key === 'Tab') {
		event.preventDefault();
		setOpen(false);
		}
	}

	function ChangeState(path:string) {
		history.push(path);
	}

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmit = () => { handleClose() } 
	
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
				<AppBar position="static" className={classes.appTable}>
  					<Toolbar className={classes.appRow}>
						<div className={classes.titlecell}>
							<Typography className={classes.title}>
								<Link underline="none" className={classes.link} onClick={() => (ChangeState('/queue'))}>queues</Link>
							</Typography>
						</div>
						<div className={classes.leftlinks}>
							<Typography className={classes.left}>
								<Link className={classes.link} onClick={() => {}}>Classes</Link>
							</Typography>
						</div>
						<div className={classes.rightlinks}>
							<Typography className={classes.right}>
								<Link className={classes.link} onClick={() => handleOpen()}>Submit Feedback</Link>
							</Typography>

							<Typography className={classes.right}>
								<Link className={classes.link} onClick={() => (ChangeState('/tickethistory'))}> Ticket History </Link>
							</Typography>
						</div>
						<div className={classes.logocell}>
							<Link className={classes.link} onClick={() => (ChangeState('/login'))}> <ExitToAppIcon fontSize="large"/> </Link>
						</div>
  					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}