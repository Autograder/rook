import AddIcon from "@material-ui/icons/Add";
import api from "../conf";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CommentIcon from "@material-ui/icons/Comment";
import { Context } from "../context/Context";
import Divider from "@material-ui/core/Divider";
import DoneIcon from "@material-ui/icons/Done";
import Drawer from "@material-ui/core/Drawer";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Feedback from "./Feedback";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import OurTheme from "../style/Theme";
import PersonIcon from "@material-ui/icons/Person";
import Styles from "../style/NavbarStyle";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Button, Link, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
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
	const [sideBar, setSideBar] = useState(false);
	const [currCourse, setCurrCourse] = useState("");
	const [classesExist, setExist] = useState(false);

	useEffect(() =>  {
		if (parseInt(course_id) !== 0) {
			setExist(true);
		} 
		setClassList([])
		// Get course list and current role for course from the url
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
					if (response.data.result.id === parseInt(course_id)) {
						setRole(item.enrolled_user_info.role)
						setCurrCourse(response.data.result.short_name)
					}
				})
			})
		})
	}, [course_id, user])

	const openMenu = (event) => {
		setClassMenu(event.currentTarget);
	};

	const toggleSideBar = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setSideBar(open);
	}

	const changeClass = (courseId) => {
		setClassMenu(null);
		history.push(`/queue/${courseId}`);
	}

	const handleLogOut = () => {
		signout();
		history.push("/login");
	}

	const goToDefaultQueue = () => {
		const courseId = classesExist ? classList[0].id : 0;
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
					<div className={classes.leftnav}>
						{classList.length > 1 ?
						<React.Fragment>
							<Button variant="contained" className={classes.courseList} onClick={openMenu}>
								{currCourse}
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
									{classList.map(function(obj) {
										if (obj.id != parseInt(course_id)) {
											return <MenuItem key={obj} onClick={() => changeClass(obj.id)}>{obj.name}</MenuItem>
										} else {
											return null
										}
									}
									)}
								</Menu>
							</ThemeProvider>
						</React.Fragment> :
							classesExist ? 
								<React.Fragment>
									<Button variant="contained" className={classes.emptyList} disabled>
										{currCourse}
									</Button>
								</React.Fragment> 
							:
						<></>}		
					</div>
					<div className={classes.rightnav}>
						<Button className={classes.navButtons} onClick={toggleSideBar(true)}>
							<MenuIcon fontSize="large"/>
						</Button>
						<Drawer anchor="right" open={sideBar} onClose={toggleSideBar(false)}>
							<div className={classes.list}>
								<List>
									{role === "ADMIN" ?
										<React.Fragment>
											<ListItem button onClick={() => history.push("/manageCourse")}>
												<ListItemIcon>
													<EditIcon fontSize="large"/>
												</ListItemIcon>
												<ListItemText className={classes.listItems}>Manage Course</ListItemText>
											</ListItem>
											<ListItem button onClick={() => history.push("/createCourse")}>
												<ListItemIcon>
													<AddIcon fontSize="large"/>
												</ListItemIcon>
												<ListItemText className={classes.listItems}>Create Course</ListItemText>
											</ListItem>
										</React.Fragment> : null
									}
									{classesExist ? 
										role === "STUDENT" ? 
											<ListItem button onClick={() => history.push(`/checkoffHistory/${course_id}`)}>
												<ListItemIcon>
													<DoneIcon fontSize="large"/>
												</ListItemIcon>
												<ListItemText className={classes.listItems}>Checkoffs</ListItemText>
											</ListItem> : 
											<ListItem button onClick={() => history.push(`/checkoff/${course_id}`)}>
												<ListItemIcon>
													<DoneIcon fontSize="large"/>
												</ListItemIcon>
												<ListItemText className={classes.listItems}>Checkoffs</ListItemText>
											</ListItem> : null
									}
									<ListItem button onClick={() => setFeedback(true)}>
										<ListItemIcon>
											<CommentIcon fontSize="large"/>
										</ListItemIcon>
										<ListItemText className={classes.listItems}>Submit Feedback</ListItemText>
									</ListItem>
									<ListItem button onClick={() => history.push("/profile")}>
										<ListItemIcon>
											<PersonIcon fontSize="large"/>
										</ListItemIcon>
										<ListItemText className={classes.listItems}>Profile</ListItemText>
									</ListItem>
									<Divider/>
									<ListItem button onClick={handleLogOut}>
										<ListItemIcon>
											<ExitToAppIcon fontSize="large"/>
										</ListItemIcon>
										<ListItemText className={classes.listItems}>Logout</ListItemText>
									</ListItem>
								</List>
							</div>
						</Drawer>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}