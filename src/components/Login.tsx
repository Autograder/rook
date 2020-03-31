import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import api from '../conf';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
        'position' : 'relative',
        'left' : '50%',
        'margin-left' : '-150px',
        'padding-bottom' : '10px',
      },
      // Border of Input Boxes when not clicked
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
      },
    },
    title : {
      color: 'white',
      'font-size': '100px',
      'text-align' : 'center',
    },
    button : {
      color: 'white',
      'text-align' : 'center',
      width : 100,
      'position' : 'relative',
      'left' : '50%',
      'margin-left' : '-50px',
    },
    wrapper : {
      'padding-bottom' : '10px',
    },
  }),
);

function eventHandleLogin(param1:any) {
  api.post('/api/users/login', {
    email: param1['Email'], 
    password: param1['Password'],
    remember: 'false'
  })  .then (resp=>{
    console.log("Logged in successfully");
    // go to their queue page
    // resp.data['result']['fname'] OR resp.data.result.fname --- resp.data.reason
  }).catch(err=>{
    if (err.status === 400) {
      // we got the status code from server -- users login failed bc bad user name pass comb
      console.log(err.data.reason);
    } else {
      // server error - render pages later
    }
  });
};


const theme = createMuiTheme({
    palette: {
      // Link when unclicked
      primary: {
        main: '#ffffff',
      },
      text: {
        // Input box when hovered over
        primary: '#ffffff',
        // Text in input box when unclicked
        secondary: '#ffffff',
      },
    },
    typography: {
      // Link and Input box text
      fontFamily: 'Quicksand',
      fontSize: 16,
    },
  }
);

class Login extends React.Component {
  constructor(props:any){
    super(props);
    this.state={
    username:'',
    password:''
    }
   }
  var classes = styles();
  render() {
      return (
        <div>
          <h1 className={classes.title}>autograder.</h1>
          <ThemeProvider theme={theme}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" color="primary" label="Email" variant="outlined" 
              onChange = {(event) => this.setState({password:event.target.value})}/>
            </form>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" color="primary" label="Password" type="password" autoComplete="current-password" variant="outlined" 
              onChange = {(event) => this.setState({password:event.target.value})}/>
            </form>
            <div className={classes.wrapper}>
              <Button variant="outlined" color="primary" className={classes.button} onClick={(event:any) => eventHandleLogin(event)}>
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
}

export default Login;