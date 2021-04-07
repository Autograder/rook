import AddIcon from "@material-ui/icons/Add";
import api from "../conf";
import CommentIcon from "@material-ui/icons/Comment";
import { Context } from "../context/Context";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Feedback from "./Feedback";
import MenuIcon from "@material-ui/icons/Menu";
import OurTheme from "../style/Theme";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import Styles from "../style/NavbarStyle";
import { ThemeProvider } from "@material-ui/styles";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import { AppBar, Button, Divider, Drawer, FormControl, List, ListItem, ListItemIcon, ListItemText, 
			MenuItem, Select, Toolbar, Tooltip, Typography } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Navbar(props) {
	Navbar.propTypes = {
		course_id: PropTypes.number,
		dropdown: PropTypes.bool,
		page: PropTypes.string
	}

	const { theme, inverseTheme } = OurTheme;
	const classes = Styles.useStyles();
	const history = useHistory();
	const location = useLocation();
	const { state:{user}, signout } = useContext(Context);
	const { course_id, dropdown, page } = props;
	
	const [feedback, setFeedback] = useState(false);
	const [fullClassList, setFullClassList] = useState([]);
	const [manageClassList, setManageClassList] = useState([]);
	const [sideBar, setSideBar] = useState(false);
	const [exist, setExist] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [course_name, setName] = useState(null);
	const [course_role, setRole] = useState(null);

	const menuProps = {
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "left"
		},
		getContentAnchorEl: null
	};

	const finalizeCourseList = useCallback((listOfClasses) => {
		listOfClasses.sort((a, b) => a.id > b.id ? 1 : -1);
		setFullClassList(listOfClasses)
		setManageClassList(listOfClasses.filter(course => (course.role === "ADMIN" || course.role === "INSTRUCTOR")));
		if (dropdown) {
			const curr_course = listOfClasses.find(item => item.id === course_id)
			if (curr_course !== undefined) {
				setName(curr_course.name)
				setRole(curr_course.role)
			} 
		}
		if (listOfClasses.length > 0) {
			setExist(true);
		}
	}, [course_id, dropdown])

	useEffect(() =>  {
		let listOfClasses = [];
		const getCourses = "/api/enrolled_course/get_courses_user_in";
		api.get(getCourses, {
			params: {
				user_id: user.id
			}
		}).then (function(response) {
			console.log(response);
			for (const item of response.data.result.courses) {
				listOfClasses.push({"id": item.enrolled_user_info.course_id, "name": item.enrolled_user_info.course_short_name, "role": item.enrolled_user_info.role});
				if (item.enrolled_user_info.role === "ADMIN") {
					setAdmin(true);
				}
			}
			finalizeCourseList(listOfClasses);
		})
	}, [user.id, finalizeCourseList]);	

	const toggleSideBar = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}  
		setSideBar(open);
	}

	const changeClass = (event) => {
		const target_course = fullClassList.find(item => item.id === event.target.value);
		setName(target_course.name);
		setRole(target_course.role);
		const newurl = location.pathname.replace(/\/\d+$/, `/${target_course.id}`);
		history.push(newurl);
	}

	const handleLogOut = () => {
		signout();
		history.push("/login");
	}

	const handleDefaultHome = () => {
		if (!user) {
			history.push("/");
		} else {
			const target_course = exist ? course_id : 0;
			if (course_role === "ADMIN") {
				if (page === "COURSESETTINGS") {
					history.go(0);
				} else {
					setName(fullClassList.find(item => item.id === target_course).name)
					history.push(`/coursesettings/${target_course}`);
				}
			} else {
				if (page === "QUEUE") {
					history.go(0);
				} else {
					setName(fullClassList.find(item => item.id === target_course).name)
					history.push(`/queue/${target_course}`);
				}
			}
		}
	}

	const handleProfile = () => {
		if (page === "PROFILE") {
			history.go(0);
		} else {
			history.push("/profile")
		}
	}

	const handleCreateCourse = () => {
		if (page === "CREATECOURSE") {
			history.go(0);
		} else {
			history.push("/createCourse");
		}
	}

	const handleQueues = () => {
		if (page === "QUEUE") {
			history.go(0);
		} else {
			history.push(`/queue/${course_id}`);
		} 
	}

	const handleCourseSettings = () => {
		if (page === "COURSESETTINGS") {
			history.go(0);
		} else {
			history.push(`/coursesettings/${course_id}`);
		} 
	}

	const handleCheckOff = () => {
		if (page === "STUDENTCHECKOFF" || page === "TUTORCHECKOFF") {
			history.go(0);
		} else {
			history.push(`/checkoff/${course_id}`)
		}
	}

	const DropDown = () => {
		if (page === "COURSESETTINGS") {
			return (
				<ThemeProvider theme={inverseTheme}>
					<FormControl>
						<Select
							disableUnderline
							disabled={!exist}
							value={course_id}
							onChange={changeClass}
							MenuProps={menuProps}
							classes={{root: classes.select}}
							>
							{manageClassList.map(function(item) {
								return <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
							})}
						</Select>
					</FormControl>
				</ThemeProvider>
			)
		} else {
			return (
				<ThemeProvider theme={inverseTheme}>
					<FormControl>
						<Select
							disableUnderline
							disabled={!exist}
							value={course_id}
							onChange={changeClass}
							MenuProps={menuProps}
							classes={{root: classes.select}}
							>
							{fullClassList.map(function(item) {
								return <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
							})}
						</Select>
					</FormControl>
				</ThemeProvider>
			)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Feedback open={feedback} handleClose={() => setFeedback(false)}/>
			<AppBar position="static" className={classes.appTable}>
				<Toolbar className={classes.appRow}>
					<div className={classes.homeCell}>
						<Button className={classes.link} onClick={handleDefaultHome}>
							<Typography className={classes.home}>queues</Typography>
						</Button>
					</div>
					<div className={classes.leftnav}>
						{dropdown && page != "HALLFAME" ? 
							exist ? 
								<DropDown/> :
								<Tooltip title="No active classes" arrow>
									<span className={classes.dropdown}>
										<DropDown/>
									</span>
								</Tooltip> : 
							null
						}
					</div>
					{ page != "HALLFAME" ?
						<div className={classes.rightnav}>
							<Button className={classes.navButtons} onClick={toggleSideBar(true)}>
								<MenuIcon fontSize="large"/>
							</Button>
							<Drawer anchor="right" open={sideBar} onClose={toggleSideBar(false)}>
								<div className={classes.list}>
									<List>
										{ !exist ?
											!admin ? 
												<React.Fragment>
													<ListItem>
														<ListItemText primaryTypographyProps={{ style: {color: "black", textAlign: "center", fontWeight: 500, fontSize: 20}}}>
															Please contact your instructor if you believe you should be enrolled in a course that you cannot see here. 
														</ListItemText>
													</ListItem>
												</React.Fragment> :
												null :
											<React.Fragment>
												<ListItem>
													<ListItemText primaryTypographyProps={{ style: {color: "black", textAlign: "center", fontWeight: 800, fontSize: 30}}}>
														{course_name}
													</ListItemText>
												</ListItem>
												<Divider/>
											</React.Fragment> 
										}
										{ exist ?
											admin ?  
												<React.Fragment>
													<ListItem button onClick={handleCourseSettings}>
														<ListItemIcon>
															<EditIcon fontSize="large"/>
														</ListItemIcon>
														<ListItemText className={classes.listItems}>Course Settings</ListItemText>
													</ListItem>
													<Divider/>
												</React.Fragment> :
												<React.Fragment>
													<ListItem button onClick={handleQueues}>
														<ListItemIcon>
															<ViewAgendaIcon fontSize="large"/>
														</ListItemIcon>
														<ListItemText className={classes.listItems}>Queues</ListItemText>
													</ListItem>
													<Divider/>
												</React.Fragment> :
											null	
										}
										{ exist && admin ? 
											<React.Fragment>
												<ListItem button onClick={handleQueues}>
													<ListItemIcon>
														<ViewAgendaIcon fontSize="large"/>
													</ListItemIcon>
													<ListItemText className={classes.listItems}>Queues</ListItemText>
												</ListItem>
												<Divider/>
											</React.Fragment> : 
											null
										}
										{ course_role === "INSTRUCTOR" ? 
											<React.Fragment>
												<ListItem button onClick={handleCourseSettings}>
													<ListItemIcon>
														<EditIcon fontSize="large"/>
													</ListItemIcon>
													<ListItemText className={classes.listItems}>Course Settings</ListItemText>
												</ListItem>
												<Divider/>
											</React.Fragment> :
											null
										}
										{ exist ?
											<React.Fragment>
												<ListItem button onClick={handleCheckOff}>
													<ListItemIcon>
														<DoneIcon fontSize="large"/>
													</ListItemIcon>
													<ListItemText className={classes.listItems}>Checkoffs</ListItemText>
												</ListItem>
												<Divider/>
											</React.Fragment> : 
											null
										}
										{ admin ? 
											<React.Fragment>
												<ListItem button onClick={handleCreateCourse}>
													<ListItemIcon>
														<AddIcon fontSize="large"/>
													</ListItemIcon>
													<ListItemText className={classes.listItems}>Create Course</ListItemText>
												</ListItem> 
												<Divider/>
											</React.Fragment>: 
											null
										}
									</List>
								</div>
								<div className={classes.bottom}>
									<List>
										<Divider/>
										<ListItem button onClick={() => setFeedback(true)}>
											<ListItemIcon>
												<CommentIcon fontSize="large"/>
											</ListItemIcon>
											<ListItemText className={classes.listItems}>Submit Feedback</ListItemText>
										</ListItem>
										<Divider/>
										<ListItem button onClick={handleProfile}>
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
						</div> : null }
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}