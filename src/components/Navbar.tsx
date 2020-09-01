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
	const { theme, inverseTheme } = OurTheme;
	const classes = Styles.useStyles();
	const history = useHistory();
	const [classMenu, setClassMenu] = useState(null);
	const [feedback, setFeedback] = useState(false);

	// Mocked data until I get axios working
	const classList = [{name:'CSE 12', id:123}, {name:'CSE 30', id:234}]
	const context = {
		class : {
			role: 'student'
		}
	}

	const student: boolean = context.class.role === 'student';
	const admin: boolean = context.class.role === 'admin';

	function ChangeState(path:string) {
		history.push(path);
	}

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setClassMenu(event.currentTarget);
	};

	const changeClass = (classId: number) => {
		setClassMenu(null);
		ChangeState(`/queue/${classId}`);
	}

	const handleLogOut = () => {
		// Call Shaeli's Logout context
		ChangeState('/login');
	}

	const goToDefaultQueue = () => {
		// Figure out how to get default page for click on queue
		ChangeState('/queue');
	}

	return (
		<ThemeProvider theme={theme}>
			<Feedback open={feedback} handleClose={() => setFeedback(false)}/>
			<AppBar position="static" className={classes.appTable}>
				<Toolbar className={classes.appRow}>
					<div className={classes.homeCell}>
						<Typography className={classes.home}>
							<Link underline="none" className={classes.link} onClick={goToDefaultQueue}>queues</Link>
						</Typography>
					</div>
					<div className={classes.leftlinks}>
						<Button className={classes.navButtons} onClick={openMenu}>Classes</Button>
						<ThemeProvider theme={inverseTheme}>
							<Menu
								anchorEl={classMenu}
								open={Boolean(classMenu)}
								onClose={() => setFeedback(false)}
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
								{classList.map((obj) => (
									<MenuItem onClick={() => changeClass(obj.id)}>{obj.name}</MenuItem>
								))}
							</Menu>
						</ThemeProvider>
					</div>
					<div className={classes.rightlinks}>
						{admin ? (
							<React.Fragment>
								<Button className={classes.navButtons} onClick={() => ChangeState('/manageCourse')}>Manage Course</Button>
								<Button className={classes.navButtons} onClick={() => ChangeState('/createCourse')}>Create Course</Button>
							</React.Fragment> ): null
						}
						{student ? 
							<Button className={classes.navButtons} onClick={() => ChangeState('/checkoffHistory')}>Checkoffs</Button> : 
							<Button className={classes.navButtons} onClick={() => ChangeState('/checkoffHistory')}>Checkoffs</Button>}
						<Button className={classes.navButtons} onClick={() => setFeedback(true)}>Submit Feedback</Button>
						<Button className={classes.navButtons} onClick={() => ChangeState('/profile')}>Profile</Button>
					</div>
					<div className={classes.exitCell}>
						<Button className={classes.navButtons} onClick={handleLogOut}>
							<ExitToAppIcon fontSize="large"/>
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}