import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Link, Typography, Menu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Feedback from './Feedback';
import Styles from '../style/NavbarStyle';
import OurTheme from '../style/Theme';
import api from '../conf';
import { ThemeProvider } from '@material-ui/styles';

export default function Navbar( props: any ) {
	const { context } = props;
	const { theme, inverseTheme } = OurTheme;
	const classes = Styles.useStyles();
	const history = useHistory();

	const [classMenu, setClassMenu] = useState(null);
	const [feedback, setFeedback] = useState(false);
	const [classList, setClassList] = useState({});

	useEffect(() => {
		let apiBaseUrl = '/api/enroll_course/get_courses_user_in';
		api.get(apiBaseUrl, {
			params: {
				user_id: context.user.id
			}
		}).then (function(response) {
			// setClassList(response.data.result.courses);
		})
		.catch( function(error) {
			// TODO: Figure out how to make sure that message is displayed because user
			// is not in any classes
			console.log(error)
		})
	})
	setClassList({id: 3, name: 'CSE 12'})
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
								{classList.map((obj: any) => (
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