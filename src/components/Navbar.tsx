import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Link, Typography, Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Feedback from './Feedback';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	paper: {
	  marginRight: theme.spacing(2),
	},
  }));

export default function Navbar( props: any ) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [feedbackOpen, setFeedbackOpen] = useState(false);

	const reactContext = {
		class : {
			role: 'tutor'
		}
	}

	function ChangeState(path:string) {
		history.push(path);
	}
	
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const feedbackClose = () => {
		setFeedbackOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Feedback open={feedbackOpen} handleClose={feedbackClose}/>
			<AppBar position="static" className={classes.appTable}>
				<Toolbar className={classes.appRow}>
					<div className={classes.homeCell}>
						<Typography className={classes.home}>
							<Link underline="none" className={classes.link} onClick={() => (ChangeState('/queue'))}>queues</Link>
						</Typography>
					</div>
					<div className={classes.rightlinks}>
						<Button onClick={handleClick}> Classes </Button>
						<ThemeProvider theme={inverseTheme}>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								elevation={0}
								getContentAnchorEl={null}
							>
								<MenuItem onClick={handleClose}>CSE 12</MenuItem>
								<MenuItem onClick={handleClose}>CSE 15L</MenuItem>
							</Menu>
						</ThemeProvider>
						<Button onClick={() => setFeedbackOpen(true)}>Submit Feedback</Button>
						<Button onClick={() => (ChangeState('/tickethistory'))}>Ticket History</Button>
					</div>
					<div className={classes.exitCell}>
						<Button onClick={() => (ChangeState('/login'))}>
							<ExitToAppIcon fontSize="large"/>
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}