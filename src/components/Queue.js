import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OurTheme from "../style/Theme";
import Styles from "../style/QueueStyle";
import { Context } from "../context/Context";
import { ThemeProvider } from "@material-ui/styles";
import Ticket from "./Ticket";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, IconButton, InputLabel, Select, TextField } from "@material-ui/core";
import React, {useEffect, useState, useContext} from "react";
import server from '../server';
import PropTypes from "prop-types";

function getDay() {
    var tempDate = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var day = months[tempDate.getMonth()] + " " + tempDate.getDate() + ", " + tempDate.getFullYear()
    return day;
}

function getTime() {
    var tempTime = new Date();
    var meridian = "";
    var hours = tempTime.getHours();
    if (hours > 11) {
        meridian = "pm";
        if (hours > 12) {
            hours = hours - 12;
        }
    } else {
        meridian = "am";
    }
    var time = hours + ":" + tempTime.getMinutes() + " " + meridian;
    return time;

}

export default function Queue(props) {
    Queue.propTypes = {
        course_id: PropTypes.number,
    };

    const classes = Styles.useStyles();
    const inverseTheme = OurTheme.inverseTheme;
    const { state:{user}} = useContext(Context);
    const [role, setRole] = useState("");

    const [open, setOpen] = useState(false);

    // Fields for Ticket
    const [description, setDescrip] = useState("");
    const [seat, setSeat] = useState("");
    const [room, setRoom] = useState("");
    
    // Hide from classmates
    const [anonymous, setAnon] = useState(false);

    // I need help with...
    const [gettingStarted, setGS] = useState(false);
    const [specifications, setS] = useState(false);
    const [algorithms, setA] = useState(false);
    const [progLang, setPL] = useState(false);
    const [implementation, setImp] = useState(false);
    const [testing, setT] = useState(false);
    
    // Program Issues
    const [runtimeError, setRE] = useState(false);
    const [compileError, setCE] = useState(false);
    const [incorrectBehavior, setIB] = useState(false);
    const [wrongOutput, setWO] = useState(false);
    const [infiniteLoop, setIL] = useState(false);

    // Other
    const [conceptualQuestion, setCQ] = useState(false)

    // Boolean Togglers
    const toggleAnon = () => {setAnon(!anonymous);}
    const toggleGS = () => {setGS(!gettingStarted);}
    const toggleS = () => {setS(!specifications);}
    const toggleA = () => {setA(!algorithms);}
    const togglePL = () => {setPL(!progLang);}
    const toggleImp = () => {setImp(!implementation);}
    const toggleT = () => {setT(!testing);}
    const toggleRE = () => {setRE(!runtimeError);}
    const toggleCE = () => {setCE(!compileError);}
    const toggleIB = () => {setIB(!incorrectBehavior);}
    const toggleWO = () => {setWO(!wrongOutput);}
    const toggleIL = () => {setIL(!infiniteLoop);}
    const toggleCQ = () => {setCQ(!conceptualQuestion);}

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setAnon(false); setGS(false); setS(false); setA(false); setPL(false); setImp(false); setT(false);
        setRE(false); setCE(false); setIB(false); setWO(false); setIL(false); setCQ(false);
        setDescrip(""); setRoom(""); setSeat("");
        setOpen(false);
    };

    const dummy = {
        gettingStarted : gettingStarted,
        specifications : specifications,
        algorithms : algorithms,
        progLang : progLang,
        implementation : implementation,
        testing : testing,
        runtimeError : runtimeError,
        compileError : compileError,
        incorrectBehavior : incorrectBehavior,
        wrongOutput : wrongOutput,
        infiniteLoop : infiniteLoop,
        conceptualQuestion : conceptualQuestion,
    };
    
    const handleSubmit = () => {
        const tagArray = {
            gettingStarted : gettingStarted,
            specifications : specifications,
            algorithms : algorithms,
            progLang : progLang,
            implementation : implementation,
            testing : testing,
            runtimeError : runtimeError,
            compileError : compileError,
            incorrectBehavior : incorrectBehavior,
            wrongOutput : wrongOutput,
            infiniteLoop : infiniteLoop,
            conceptualQuestion : conceptualQuestion,
        };

        handleClose();
    };

    // Existing Queue for the Class
    const [ticketList, setTicketList] = useState(
        [<Ticket name='Sravya Balasa' seat="6" room="B250"
        description='I need help with a bug'
        time='12:34pm'
        date='April 1, 2020'
        tagArray={dummy}
        role={role}/>]
    );

    const [questionTab, setTab] = React.useState(true);
    const clickQuestion = () => {
        if (!questionTab) {
            setTab(true)
        }
    };

    const clickCheckoff = () => {
        if (questionTab) {
            setTab(false)
        }
    }

    useEffect(() => {
        server.getUserRoleInCourse(user.id,props.course_id)
            .then(function(response) {
                setRole(response.data.result.enrolled_course_info.role)
            })
    })
    
    return (
        <div>
            <IconButton aria-label="delete" onClick={() => handleClickOpen()} className={classes.icon}>
                <AddCircleOutlineIcon/>
            </IconButton>
            <ThemeProvider theme={inverseTheme}>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogActions>
                        <Button variant="contained" onClick={clickQuestion} className={classes.tab} disableElevation
                                style= {{ color: "#FFFFFF",
                                          backgroundColor : questionTab ? "#2A667B" : "#CCCCCC",
                                          fontWeight: questionTab ? "bold" : "normal" }}>Question</Button>
                        <Button variant="contained" onClick= {clickCheckoff} className={classes.tab} disableElevation
                                style = {{ color: "#FFFFFF",
                                           backgroundColor : !questionTab ? "#2A667B" : "#CCCCCC",
                                           fontWeight: !questionTab ? "bold" : "normal" }}>Checkoff</Button>
                    </DialogActions>
                    { questionTab ? (<DialogTitle className={classes.title} id="form-dialog-title">Create Question</DialogTitle>)
                                  : (<DialogTitle className={classes.title} id="form-dialog-title">Create Checkoff</DialogTitle>) }
                    <DialogContent>
                        { questionTab ? 
                        (<div>
                            <FormControlLabel
                                className={classes.check}
                                control={<Checkbox className={classes.check} onClick={toggleGS} color="primary" checked={gettingStarted} name="anonymous" />}
                                label="Getting Started"
                            />
                            <FormControlLabel
                                className={classes.check} label="Specifications"
                                control={<Checkbox className={classes.check} onClick={toggleS} color="primary" checked={specifications} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Algorithms"
                                control={<Checkbox className={classes.check} onClick={toggleA} color="primary" checked={algorithms} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Programming Language"
                                control={<Checkbox className={classes.check} onClick={togglePL} color="primary" checked={progLang} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Implementation"
                                control={<Checkbox className={classes.check} onClick={toggleImp} color="primary" checked={implementation} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Testing"
                                control={<Checkbox className={classes.check} onClick={toggleT} color="primary" checked={testing} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Runtime Error"
                                control={<Checkbox className={classes.check} onClick={toggleRE} color="primary" checked={runtimeError} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Compile Error"
                                control={<Checkbox className={classes.check} onClick={toggleCE} color="primary" checked={compileError} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Incorrect Behavior"
                                control={<Checkbox className={classes.check} onClick={toggleIB} color="primary" checked={incorrectBehavior} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Wrong Output"
                                control={<Checkbox className={classes.check} onClick={toggleWO} color="primary" checked={wrongOutput} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Infinite Loop"
                                control={<Checkbox className={classes.check} onClick={toggleIL} color="primary" checked={infiniteLoop} name="anonymous" />}
                            />
                            <FormControlLabel
                                className={classes.check} label="Conceptual Question"
                                control={<Checkbox className={classes.check} onClick={toggleCQ} color="primary" checked={conceptualQuestion} name="anonymous" />}
                            />
                            
                            <FormControl variant="standard" className={classes.locationfield} fullWidth>
                                <InputLabel htmlFor="age-native-simple">Room</InputLabel>
                                <Select native>
                                    <option aria-label="None" value="" />
                                    <option value={"B250"}>B250</option>
                                    <option value={"B240"}>B240</option>
                                    <option value={"B250"}>B260</option>
                                    <option value={"B260"}>Hallway</option>
                                </Select>
                            </FormControl>

                            <FormControl variant="standard" className={classes.locationfield} fullWidth>
                                <InputLabel htmlFor="age-native-simple">Seat</InputLabel>
                                <Select native >
                                    <option aria-label="None" value="" />
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                </Select>
                            </FormControl>

                            <TextField
                                className={classes.text}
                                onChange = {(e) => setDescrip(e.target.value)}
                                variant="outlined"
                                id="name"
                                label="Description"
                                multiline
                                rows="6"
                                fullWidth
                            />
                            <FormControlLabel
                                className={classes.check}
                                control={<Checkbox className={classes.check} onClick={toggleAnon} color="primary" checked={anonymous} name="anonymous" />}
                                label="Hide from Classmates?"
                            />
                        </div> )
                        : (<div>
                            <FormControl variant="standard" className={classes.locationfield} fullWidth>
                                <InputLabel htmlFor="age-native-simple">Room</InputLabel>
                                <Select native>
                                    <option aria-label="None" value="" />
                                    <option value={"B250"}>B250</option>
                                    <option value={"B240"}>B240</option>
                                    <option value={"B250"}>B260</option>
                                    <option value={"B260"}>Hallway</option>
                                </Select>
                            </FormControl>

                            <FormControl variant="standard" className={classes.locationfield} fullWidth>
                                <InputLabel htmlFor="age-native-simple">Seat</InputLabel>
                                <Select native >
                                    <option aria-label="None" value="" />
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                </Select>
                            </FormControl>

                            <TextField
                                className={classes.text}
                                onChange = {(e) => setDescrip(e.target.value)}
                                variant="outlined"
                                id="name"
                                label="Description"
                                multiline
                                rows="6"
                                fullWidth
                            />
                            <FormControlLabel
                                className={classes.check}
                                control={<Checkbox className={classes.check} onClick={toggleAnon} color="primary" checked={anonymous} name="anonymous" />}
                                label="Hide from Classmates?"
                            />
                        </div>)}
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.submit} onClick={handleSubmit} color="primary">Submit</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
            <Ticket name='Sravya Balasa' seat="6" room="B250"
                description='I need help with a bug'
                time='12:34pm'
                date='April 1, 2020'
                tagArray={dummy}
                role={role}/>
        </div>
    );
} 