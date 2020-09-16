import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { TextField, Button, Link, Collapse } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/styles';
import api from '../conf';
import OurTheme from '../style/Theme';
import Styles from '../style/LoginStyle';
import HelpIcon from '@material-ui/icons/Help';

export default function Login(props:any) {
  // Hooks
  let history = useHistory();
  let classes = Styles.useStyles();
  let theme = OurTheme.theme;

  // States
  let [password, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [open, setOpen] = useState(false);
  
  // Handling key press
  function PressedKey(event:any) {

    if (event.key === "Enter") {
      // Handle it as a submission
      event.preventDefault();
      LoginAttempt();
    } 
    setOpen(false);
  }

  // Handling an attempted login
  function LoginAttempt() {

    // Define where we are sending info and what info to send
    let apiBaseUrl : string = '/api/users/login';
    let payload : object = {
      "email" : email,
      "password" : password,
    };
    
    api.post(apiBaseUrl,payload)
      // Username and Password were a match for a user
      .then ( function (response) {
        // Direct to queue page
        console.log("Login successfull");
        // TODO: Go to default queue or queue/none
        // grab user id here to keep in context
        history.push('/queue');
      })
      // Any number of errors occurred
      .catch(function (error) {
        if (error.response.status === 400) {
          // Display an alert and clear password
          console.log("Incorrect email and/or password");
          setOpen(true);
          setPass('');
        } else {
          // Reroute to custom 404
          console.log("Server error possibly");
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
        <div className={classes.main} onClick = {(event) => PressedKey(event)}>
          <h1 className={classes.title}>queues<Link href="secret/halloffame" className={classes.underline}>.</Link></h1>
            <form className={classes.email}>
              <TextField id="outlined-basic" color="primary" label="Email" type="email" value={email} variant="outlined" 
                onChange = {(event) => setEmail(event.target.value)}
                onKeyPress = {(event) => PressedKey(event)}
                onKeyUp = {(event) => PressedKey(event)}/>
            </form>
            <form className={classes.password}>
              <TextField id="outlined-basic" color="primary" label="Password" type="password" value={password} variant="outlined" 
                onChange = {(event) => setPass(event.target.value)}
                onKeyPress = {(event) => PressedKey(event)}/>
            </form>
            <div className={classes.links}>
              <Link href="forgotpassword" > Forgot Password? </Link>
            </div>
            <Button className={classes.button} color="primary" variant="outlined" 
              onClick={(event) => (LoginAttempt())}> Login
            </Button>
        </div>
        <Link href="instructions" className={classes.bottomRightIcon}> <HelpIcon fontSize="large"/> </Link>
      </ThemeProvider>
    </div>
  );
}
