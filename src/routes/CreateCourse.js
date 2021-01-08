import React, {useState, useContext} from 'react';
import Navbar from '../components/Navbar';
import { TextField, Typography, Grid, Select, Button, FormControl, InputLabel, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/CreateCourseStyle';
import { Context } from '../context/Context';
import server from '../server'

export default function CreateCourse() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [quarter, setQuarter] = useState('');
    const [shortName, setShortName] = useState('');
    const [url, setURL] = useState('');    
    const {state: {user}} = useContext(Context);

    // TODO: what do about the rosters
    const handleSubmit = () => {
        // TODO: set a waiting timer button thing?
        server.createCourse(name, quarter, shortName, url, user)
            .then(function(response){
                setOpen(true)
                setTimeout(() => { setOpen(false) }, 5000)
            })
            .catch((err) => console.log(err))
    }

    const handleClose = () => {
        setOpen(false)
    }

    if (!user) {
        return <Typography> You must be logged in! </Typography>
    }

    // TODO: add event listeners??
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.alert}>
                    <Collapse in={open}>
                        <Alert onClose={() => handleClose()} severity="success">Course successfully created.</Alert>
                    </Collapse>
                </div>
                <Navbar createCourse={true}/>
                <div className={classes.wrappertitle}>
                    <Typography className={classes.title}>Create Course</Typography>
                </div>
                <Grid container spacing={3} className={classes.courseForm}>
                        <Grid item xs={12} className={classes.courseRow}>
                            <Typography className={classes.white}>User Information</Typography>
                            <form className={classes.form}>
                                <TextField  className={classes.formControl} id="standard-basic" label="First Name" variant="outlined"/>
                                <TextField  className={classes.formControl} id="standard-basic" label="Last Name" variant="outlined"/>
                                <TextField  className={classes.formControl} id="standard-basic" label="Email" variant="outlined"/>
                            </form>
                        </Grid>
                        <Grid item xs={12} className={classes.courseRow}>
                            <Typography className={classes.white}>Class Information</Typography>
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
                        <Grid item xs={12} className={classes.courseRow}>
                            <Typography className={classes.white}>Roster Information</Typography>
                            <form className={classes.form}>
                                <input className={classes.input} accept="image/*" id="contained-button-file" multiple type="file"/>
                                <label className={classes.upButton} htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Choose File
                                    </Button>
                                </label>
                                <input className={classes.input} accept="image/*" id="contained-button-file" multiple type="file"/>
                                <label className={classes.upButton} htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Choose File
                                    </Button>
                                </label>
                                <input className={classes.input} accept="image/*" id="contained-button-file" multiple type="file"/>
                                <label className={classes.upButton} htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Choose File
                                    </Button>
                                </label> 
                            </form>
                        </Grid>
                </Grid>

                <div className={classes.wrapper}>
                    <Button className={classes.submit} onClick={handleSubmit} variant="outlined" color="primary">Submit</Button>
                </div>
            </ThemeProvider>
        </div>
    );
} 

/* fix the sizing of the upload buttons and show the name */
/* add queue locked or not */

/* <TextField  className={classes.formControl} id="standard-basic" label="Course Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="WaitList Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Staff Roster" placeholder = "Basic Data Structures" variant="outlined"/> */