import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Grid from '@material-ui/core/Grid';
import Styles from '../style/CourseSettingsStyle';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

export default function CourseSettingsTab(){
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();

    const [state, setState] = React.useState({
        queue: false,
        status: false,
        lock: false,
        lab: false,
      });

    const [enable, setEnable] = React.useState({
        queue: "disabled",
        status: "disabled",
        lock: "disabled",
        lab: "disabled",
      });

    const MySwitch = withStyles({
        switchBase: {
          color: "#5a5a5a",
          '&$checked': {
            color: "#5ECA6F",
          },
          '&$checked + $track': {
            backgroundColor: "#5ECA6F",
          },
        },
        checked: {},
        track: {},
      })(Switch);

    const handleChange = (event) =>{
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    function FormRow(props) {
        return (
          <React.Fragment>
            <Grid  item xs={4}>
        <Paper elevation={0} className={classes.paper}>{props.title}</Paper>
            </Grid>
            <Grid  item xs={8}>
        <Paper elevation={0} className={classes.paper2}>{props.info}</Paper>
            </Grid>
          </React.Fragment>
        );
      }

    function FormRow2(props) {
        return (
            
          <React.Fragment>
          <Grid  item xs={12}  >
          <FormControlLabel  labelPlacement="start" 
        control={<MySwitch color="secondary" checked={props.checked} onChange={handleChange} name={props.name}/>} label={<Typography className={classes.switchLabel}>{props.title}</Typography>}
              /> 
          </Grid>
              
        </React.Fragment>
        
        );
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h2 className={classes.header}>COURSE INFO</h2>
                        <Grid container spacing={2}>
                            <FormRow title='Course Name:' info='Software Tools & Techniques' />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Code:' info='CSE15L'/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Quarter:' info='Spring'/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow title='Year:' info='2020'/>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <h2 className={classes.header}>SETTINGS</h2>
                        <Grid container spacing={2}>
                            <FormRow2 title='Course Status:' name="status" checked={state.status} label={enable.status}/>
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Queue:' name="queue" checked={state.queue} label={enable.queue}  />
                        </Grid> 
                        <Grid container spacing={2}>
                            <FormRow2 title='Lock Queue Button:' name="lock" checked={state.lock} label={enable.lock} />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow2 title='Using CSE Labs:'name="lab" checked={state.lab} label={enable.lab} />
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}