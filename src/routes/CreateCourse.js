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
    const {state: {user}} = useContext(Context);

    const [name, setName] = useState('');
    const [quarter, setQuarter] = useState('');
    const [year, setYear] = useState('');
    const [shortName, setShortName] = useState('');
    const [url, setURL] = useState('');    

    const handleSubmit = () => {
        // TODO: set a waiting timer button thing?
        console.log(name, quarter, year, shortName, url)
        server.createCourse(name, quarter, shortName, url, user)
            .then(function(response){
                // TODO: what do about the rosters
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
                <Grid container spacing={3} className={classes.courseForm}>
                        <Grid item xs={12} className={classes.courseRow}>
                            <Typography className={classes.white}>Class Information</Typography>
                            <form className={classes.form}>
                                <TextField  className={classes.formControl} id="standard-basic" label="Course Title" 
                                            placeholder = "Basic Data Structures" variant="outlined" onChange = {(event) => setName(event.target.value)}/>
                                <TextField  className={classes.formControl} id="standard-basic" label="Course Code" 
                                            placeholder="CSE12" variant="outlined" onChange = {(event) => setShortName(event.target.value)}/>
                                <TextField className={classes.formControl} id="standard-basic" label="Course URL" 
                                           placeholder="ieng6.ucsd.edu" variant="outlined" onChange = {(event) => setURL(event.target.value)}/>
                                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">Course Quarter</InputLabel>
                                    <Select native onChange = {(event) => setQuarter(event.target.value)}>
                                        <option aria-label="None" value=""/>
                                        <option value={"SS1"}>SS1</option>
                                        <option value={"SS2"}>SS2</option>
                                        <option value={"FA"}>FA</option>
                                        <option value={"WI"}>WI</option>
                                        <option value={"SP"}>SP</option>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">Course Year</InputLabel>
                                    <Select native onChange = {(event) => setYear(event.target.value)}>
                                        <option aria-label="None" value=""/>
                                        <option value={2019}>2019</option>
                                        <option value={2020}>2020</option>
                                        <option value={2021}>2021</option>
                                        <option value={2021}>2022</option>
                                        <option value={2021}>2023</option>
                                        <option value={2021}>2024</option>
                                        <option value={2021}>2025</option>
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
/* TODO: add queue locked or not */
/* Uploading the roster stuff in another page */

/* <TextField  className={classes.formControl} id="standard-basic" label="Course Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="WaitList Roster" variant="outlined"/>
                                    <TextField  className={classes.formControl} id="standard-basic" label="Staff Roster" placeholder = "Basic Data Structures" variant="outlined"/> */
