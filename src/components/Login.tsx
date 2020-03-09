import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
        'position' : 'absolute',
        'left' : '50%',
        'margin-left' : '-150px',
        'padding-bottom' : '100px',
      },
    },
    title : {
      color: 'white',
      'font-size': '100px',
      'text-align' : 'center',
    },
    text: {
      'borderColor' : 'white',
    }
  }),
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f8f8f8',
    },
  },
});

export default function Login() {
  const classes = useStyles();
    return (
      <div>
        <h1 className={classes.title}>autograder.</h1>
        <body>
          <p>
            <ThemeProvider theme={theme}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" className={classes.text} color="primary" label="Email" variant="outlined" />
            </form>
            <br/><br/><br/><br/>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="outlined-basic" className={classes.text} color="primary" label="Password" variant="outlined" />
            </form>
            </ThemeProvider>
          </p>
        </body>
      </div>
    );
}