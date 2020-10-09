import React, {useState, useContext} from 'react';
import Navbar from '../components/Navbar';
import { TextField, Typography, Grid, Select, Button, FormControl, InputLabel, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/CreateCourseStyle';
import { Context } from '../context/Context';
import { useHistory } from "react-router-dom";

export default function CreateCourse() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    
    const [open, setOpen] = useState(false);
    const {state: {userId}} = useContext(Context);
    let history = useHistory();

    const handleSubmit = () => {
        setOpen(true)
        setTimeout(() => { setOpen(false) }, 5000)
    }

    const handleClose = () => {
        setOpen(false)
    }

    if (!userId) {
        history.push('/forbidden');
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.alert}>
                    <Collapse in={open}>
                        <Alert onClose={() => handleClose()} severity="success">Course successfully created.</Alert>
                    </Collapse>
                </div>
                <Navbar/>
                <div className={classes.wrappertitle}>
                    <Typography className={classes.title}>Create Course</Typography>
                </div>
                <div className={classes.wrapper}>
                    <Grid container spacing={3} className={classes.wrapper2}>
                            <Grid item className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  className={classes.formControl} id="standard-basic" label="First Name" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Last Name" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Email" variant="outlined"/>
                                </form>
                            </Grid>
                            <Grid item className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Course Title" placeholder = "Basic Data Structures" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Course Code" placeholder="CSE12" variant="outlined"/>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Course Quarter</InputLabel>
                                        <Select native >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="standard" className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Course Year</InputLabel>
                                        <Select native >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </form>
                            </Grid>
                            <Grid item className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Course Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="WaitList Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Staff Roster" placeholder = "Basic Data Structures" variant="outlined"/>
                                </form>
                            </Grid>
                    </Grid>
                </div>
                <div className={classes.wrapper}>
                    <Button className={classes.submit} onClick={handleSubmit} variant="outlined" color="primary">Submit</Button>
                </div>
            </ThemeProvider>
        </div>
    );
} 

/* Need to make it resizable for smaller windows */