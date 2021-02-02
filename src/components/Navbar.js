import AddIcon from "@material-ui/icons/Add";
import api from "../conf";
import CommentIcon from "@material-ui/icons/Comment";
import { Context } from "../context/Context";
import Divider from "@material-ui/core/Divider";
import DoneIcon from "@material-ui/icons/Done";
import Drawer from "@material-ui/core/Drawer";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Feedback from "./Feedback";
import FormControl from '@material-ui/core/FormControl';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import OurTheme from "../style/Theme";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import Select from '@material-ui/core/Select';
import Styles from "../style/NavbarStyle";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar, Button, Link, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Navbar(props) {
	// Define prop types
	Navbar.propTypes = {
		createCourse: PropTypes.bool,
		dropdown: PropTypes.bool,
	}

	// Setup
	const { theme, inverseTheme } = OurTheme;
	const classes = Styles.useStyles();
	const history = useHistory();
	const { course_id } = useParams();
	const { state:{user}, signout } = useContext(Context);
	const {createCourse, dropdown} = props;
	
	// States
	const [feedback, setFeedback] = useState(false);
	const [classList, setClassList] = useState([]);
	const [sideBar, setSideBar] = useState(false);
	const [exist, setExist] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState('');
	const [role, setRole] = useState('');

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
		const curr_course = listOfClasses.find(item => item.id === parseInt(course_id))
		if (curr_course !== undefined) {
			setSelectedCourse(curr_course.name)
			setRole(curr_course.role)
			setClassList(listOfClasses)
			setExist(true)
		} else {
			setExist(false)
		}
	}, [course_id])

	useEffect(() =>  {
		let listOfClasses = [];
		const getCourses = "/api/enrolled_course/get_courses_user_in";
		api.get(getCourses, {
			params: {
				user_id: user.id
			}
		}).then (function(response) {
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
		setSelectedCourse(event.target.value);
		const curr_course = classList.find(item => item.name === event.target.value)
		history.push(`/queue/${curr_course.id}`);
	}

	const handleLogOut = () => {
		signout();
		history.push("/login");
	}

	const goToDefaultQueue = () => {
		const target_course = exist ? classList[0]: 0;
		if (parseInt(target_course.id) === parseInt(course_id)) {
			history.go(0);
		} else {

			setSelectedCourse(target_course.name)
			history.push(`/queue/${target_course.id}`);
		} 
	}

	const handleCreateCourse = () => {
		history.push("/createCourse");
	}

	const DropDownMenu = () => {
		return (
			exist ? 
				<ThemeProvider theme={inverseTheme}>
					<FormControl>
						<Select
							disableUnderline
							value={selectedCourse}
							onChange={changeClass}
							MenuProps={menuProps}
							classes={{root: classes.select}}
							>
							{classList.map(function(item) {
								return <MenuItem value={item.name} key={item.name}>{item.name}</MenuItem>
							})}
						</Select>
					</FormControl>
				</ThemeProvider> : null
		);
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
						<DropDownMenu/>
					</div>
					<div className={classes.rightnav}>
						<Button className={classes.navButtons} onClick={toggleSideBar(true)}>
							<MenuIcon fontSize="large"/>
						</Button>
						<Drawer anchor="right" open={sideBar} onClose={toggleSideBar(false)}>
							<div className={classes.list}>
								<List>
									{ admin ? 
										<ListItem button onClick={handleCreateCourse}>
											<ListItemIcon>
												<AddIcon fontSize="large"/>
											</ListItemIcon>
											<ListItemText className={classes.listItems}>Create Course</ListItemText>
										</ListItem> : null
									}
									{ role === "ADMIN" && !createCourse ? 
										<ListItem button onClick={() => history.push("/manageCourse")}>
											<ListItemIcon>
												<EditIcon fontSize="large"/>
											</ListItemIcon>
											<ListItemText className={classes.listItems}>Manage Course</ListItemText>
										</ListItem> : null
									}
									{exist && !createCourse ? 
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