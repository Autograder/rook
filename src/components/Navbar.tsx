import React from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Link, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	paper: {
	  marginRight: theme.spacing(2),
	},
  }));

export default function Navbar(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event:any) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

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

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);
	
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar position="static" className={classes.appBar}>
  					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link onClick={() => (ChangeState('/queue'))}>queues</Link>
						</Typography>
						<div className={classes.class}>
							<Button
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}
							>
							Classes
							</Button>
							<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
								{...TransitionProps}
								style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
										<MenuItem className={classes.text} onClick={handleClose}>CSE 15L</MenuItem>
										<MenuItem className={classes.text} onClick={handleClose}>CSE 12</MenuItem>
									</MenuList>
									</ClickAwayListener>
								</Paper>
								</Grow>
							)}
							</Popper>
						</div>
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
