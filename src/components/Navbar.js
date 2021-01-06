import api from "../conf";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Context } from "../context/Context";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Feedback from "./Feedback";
import Grid from '@material-ui/core/Grid';
import OurTheme from "../style/Theme";
import Styles from "../style/NavbarStyle";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Button, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Navbar () {
	// Setup
	const { theme, inverseTheme } = OurTheme;
	const classes = Styles.useStyles();
	const history = useHistory();
	const { course_id } = useParams();
	const { state:{user}, signout } = useContext(Context);
	
	// States
	const [classMenu, setClassMenu] = useState(null);
	const [feedback, setFeedback] = useState(false);
	const [classList, setClassList] = useState([]);
	const [role, setRole] = useState("");

	useEffect(() =>  {
		// Get course list and current role for course (url param)
		const getCourses = "/api/enrolled_course/get_courses_user_in";
		api.get(getCourses, {
			params: {
				user_id: user.id
			}
		}).then (function(response) {
			const getCourse = "/api/course/find_course_by_id";
			(response.data.result.courses).forEach(function(item) {
				api.get(getCourse, {
					params: {
						id: item.enrolled_user_info.course_id,
					}
				}).then (function(response) {
					setClassList(classList => [...classList, {"id": response.data.result.id, "name": response.data.result.short_name, "role": item.enrolled_user_info.role}])
					if (response.data.result.id === course_id) {
						setRole(item.enrolled_user_info.role)
					}
				})
			})
		})
	}, [course_id, user])

	const openMenu = (event) => {
		setClassMenu(event.currentTarget);
	};

	const changeClass = (courseId) => {
		setClassMenu(null);
		history.push(`/queue/${courseId}`);
	}

	const handleLogOut = () => {
		signout();
		history.push("/login");
	}

	const goToDefaultQueue = () => {
		const courseId = classList.length > 0 ? classList[0].id : 0;
		history.push(`/queue/${courseId}`);
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
						{classList.length > 0 ?
						<React.Fragment>
							<Button variant="contained" className={classes.courseList} onClick={openMenu}>
								Courses
								<ArrowDropDownIcon fontSize="large"/>
							</Button>
							<ThemeProvider theme={inverseTheme}>
								<Menu
									anchorEl={classMenu}
									open={Boolean(classMenu)}
									onClose={() => setClassMenu(null)}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "center",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "center",
									}}
									elevation={0}
									getContentAnchorEl={null}
									>
									{classList.map((obj) => (
										<MenuItem key={obj} onClick={() => changeClass(obj.id)}>{obj.name}</MenuItem>
									))}
								</Menu>
							</ThemeProvider>
						</React.Fragment> :
						<React.Fragment>
							<Tooltip title="You must enroll in a course to be able to see its queue" placement="bottom">
								<Button className={classes.navButtons}>Classes</Button>
							</Tooltip>
						</React.Fragment>}		
					</div>
					<div className={classes.rightlinks}>
						{role === "admin" ? (
							<React.Fragment>
								<Button className={classes.navButtons} onClick={() => history.push("/manageCourse")}>Manage Course</Button>
								<Button className={classes.navButtons} onClick={() => history.push("/createCourse")}>Create Course</Button>
							</React.Fragment> ): null
						}
						{role === "student" ? 
							<Button className={classes.navButtons} onClick={() => history.push(`/checkoffHistory/${course_id}`)}>Checkoffs</Button> : 
							<Button className={classes.navButtons} onClick={() => history.push(`/checkoff/${course_id}`)}>Checkoffs</Button>}
						<Button className={classes.navButtons} onClick={() => setFeedback(true)}>Submit Feedback</Button>
						<Button className={classes.navButtons} onClick={() => history.push("/profile")}>Profile</Button>
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