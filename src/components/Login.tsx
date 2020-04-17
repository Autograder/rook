import React from 'react';
import api from '../conf';
import { TextField, Typography, Button, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useState } from 'react';
import OurTheme from '../style/Theme';
import Styles from '../style/LoginStyle';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

export default function Login(props:any) {
  let history = useHistory();
  let classes = Styles.useStyles();
  let theme = OurTheme.theme;
  let [password, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [open, setOpen] = useState(false);

  // Handling a log in occurence
  function EventHandleLogin(email:string, password:string) {
    let apiBaseUrl : string = '/api/users/login';
    let payload : object = {
      "email" : email,
      "password" : password,
    };
    
    api.post(apiBaseUrl,payload)
      .then ( function (response) {
        console.log("Login successfull");
        history.push('/queue');
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          // Display a notification error banner 
          console.log("Incorrect email and/or password");
          setOpen(true);
        } else {
          // Reroute to an error page
          console.log("Server error possibly");
        }
        });
  }

  // What is actually being rendered
  return (
    <div>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              size="small"
              color="inherit"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          variant="filled"
          severity="error"
        >
          Incorrect email and/or password!
        </Alert>
      </Collapse>
      <h1 className={classes.title}>autograder.</h1>
      <ThemeProvider theme={theme}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" color="primary" label="Email" variant="outlined" 
          onChange = {(event) => setEmail(event.target.value)}/>
        </form>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" color="primary" label="Password" type="password" autoComplete="current-password" variant="outlined" 
          onChange = {(event) => setPass(event.target.value)}/>
        </form>
        <div className={classes.wrapper}>
          <Button variant="outlined" color="primary" className={classes.button} onClick={(event) => (EventHandleLogin(email, password))}>
            Login
          </Button>
        </div>
        <Typography align='center'>
          <Link href="instructions"> First Time? </Link>
          <br/>
          <Link href="reset"> Forgot Password? </Link>
        </Typography>
      </ThemeProvider>
    </div>
  );
}
