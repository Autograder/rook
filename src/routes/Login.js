import { Alert } from "@material-ui/lab";
import api from "../conf";
import { Context } from "../context/Context";
import HelpIcon from "@material-ui/icons/Help";
import OurTheme from "../style/Theme";
import Styles from "../style/LoginStyle";
import { ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { Button, Collapse, Link, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";

export default function Login() {
  const history = useHistory();
  const classes = Styles.useStyles();
  const theme = OurTheme.theme;
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const { signin, changecourse } = useContext(Context);

  const pressedKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginAttempt();
    } 
    setOpen(false);
  }

  const loginAttempt = async () =>  {
    console.log("I got here?");
    const login = "/api/users/login";
    const loginInfo = {
      "email" : email,
      "password" : password,
    }
    await api.post(login, loginInfo)
      .then (async function (response) {
        signin(response.data.result);
        const url = "/api/enrolled_course/get_courses_user_in";
        
        await api.get(url, {
          params: {
            user_id: response.data.result.id
          }
        })
        .then ( function(response) {
          const courseId = response.data.result.courses.length > 0 ? response.data.result.courses[0].enrolled_user_info.course_id : 0;
          if (courseId !== 0) {
            changecourse(courseId, response.data.result.courses[0].enrolled_user_info.role)
          }
          history.push(`/queue/${courseId}`);
        })
      })
      .catch(function (error) {
        console.log(error)
        if (error.response.status === 400) {
          // Display an alert and clear password
          setOpen(true);
          setPass("");
        } else {
          // TODO: Reroute to custom 404
        }
     });
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.popup}>
          <Collapse in={open}>
            <Alert variant='filled' severity="error">Incorrect username and/or password!</Alert>
          </Collapse>
        </div>
        <div className={classes.main} onClick = {(event) => pressedKey(event)}>
          <h1 className={classes.title}>queues<Link href="secret/halloffame" className={classes.underline}>.</Link></h1>
            <form className={classes.email}>
              <TextField color="primary" label="Email" type="username" value={email} variant="outlined" 
                onChange = {(event) => setEmail(event.target.value)}
                onKeyPress = {(event) => pressedKey(event)}
                onKeyUp = {(event) => pressedKey(event)}/>
            </form>
            <form className={classes.password}>
              <TextField color="primary" label="Password" type="password" value={password} variant="outlined" 
                onChange = {(event) => setPass(event.target.value)}
                onKeyPress = {(event) => pressedKey(event)}/>
            </form>
            <div className={classes.links}>
              <Link href="forgotpassword" > Forgot Password? </Link>
            </div>
            <Button className={classes.button} color="primary" variant="outlined" 
              onClick={() => loginAttempt()}> Login
            </Button>
        </div>
        <Link href="instructions" className={classes.bottomRightIcon}> <HelpIcon fontSize="large"/> </Link>
      </ThemeProvider>
    </div>
  );
}
