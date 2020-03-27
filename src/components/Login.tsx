import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


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
});

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

export default function Login() {
  
  const classes = styles();
    return (
      <div>
        <h1 className={classes.title}>autograder.</h1>
        <ThemeProvider theme={theme}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" color="primary" label="Email" variant="outlined" />
          </form>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" color="primary" label="Password" type="password" autoComplete="current-password" variant="outlined" />
          </form>
          <div className={classes.wrapper}>
            <Button variant="outlined" color="primary" className={classes.button}>Login</Button>
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