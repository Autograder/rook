import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import api from '../conf';
import OurTheme from '../style/Theme';
import Styles from '../style/LoginStyle';

export default function Login(props:any) {

  const classes = Styles.useStyles();
  const theme = OurTheme.theme;
  // Look into more - to save values from text fields
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');

  // What is actually being rendered
  return (
    <div>
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
          <Button variant="outlined" color="primary" className={classes.button} onClick={(event) => eventHandleLogin(email, password)}>
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

// Handling a log in occurence
function eventHandleLogin(email:any, password:any) {
  console.log(email);
  console.log(password);
  api.post('/api/users/login', {
    email: email, 
    password: password,
  })  .then (resp=>{
    console.log("Logged in successfully");
    // go to their queue page
    // resp.data['result']['fname'] OR resp.data.result.fname --- resp.data.reason
  }).catch(err=>{
    if (err.status === 400) {
      // we got the status code from server -- users login failed bc bad user name pass comb
      console.log("hello");
    } else {
      // server error - render pages later
    }
  });
};