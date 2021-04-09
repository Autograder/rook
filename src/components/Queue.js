import React, {useState, useContext, useEffect} from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Checkbox, FormControl, InputLabel, Select, FormControlLabel, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Ticket from './Ticket';
import OurTheme from '../style/Theme';
import Styles from '../style/QueueStyle';
import PropTypes from 'prop-types';
import { Context } from '../context/Context';
import api from '../conf';
import server from '../server';

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

export default function Queue() {
    const classes = Styles.useStyles();
    const inverseTheme = OurTheme.inverseTheme;
    const {state: {user, courseId} } = useContext(Context);
    const [open, setOpen] = useState(false);

    // Fields for Ticket
    const [description, setDescrip] = useState("");
    const [seat, setSeat] = useState("");
    const [room, setRoom] = useState("");
    const [helpType, setHelpType] = useState(0); // Question: 0, Checkoff = 1
    
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

    const createTagList = () => {
        let ret = "";
        gettingStarted && (ret += "0;")
        specifications && (ret += "1;")
        algorithms && (ret += "2;")
        progLang && (ret += "3;")
        implementation && (ret += "4;")
        compileError && (ret += "5;")
        runtimeError && (ret += "6;")
        wrongOutput && (ret += "7;")
        infiniteLoop && (ret += "8;")
        if(ret !== ""){
            return ret.substr(0,ret.length - 1);
        }
        return "1";
    }
    
    const handleSubmit = async () => {
        let tagList = createTagList();
        let apiBaseUrl = "/api/ticket/add_ticket";
        let payload = {
            "student_id": user.id,
            "queue_id": courseId, // parseInt(queueId)
            "title": "uhh", // need to get student name 
            "description": description, // description
            "room": room, //room
            "workstation": seat, // seat
            "is_private": anonymous, //anonymous
            "help_type": helpType, 
            "tag_list": tagList
        };

        await api.post(apiBaseUrl, payload, {withCredentials:true})
        .then ((response) => {
            loadTickets();
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });

        /*const tagArray = {
            gettingStarted,
            specifications,
            algorithms,
            progLang,
            implementation,
            testing,
            runtimeError,
            compileError,
            incorrectBehavior,
            wrongOutput,
            infiniteLoop,
            conceptualQuestion,
        };

        setTicketList(
            ticketList.concat([
                <Ticket name={"John Doe"} 
                room={room}
                seat={seat}
                description={description}
                time={getTime()}
                date={getDay()}
                tagArray={tagArray}/>]));*/
        
        handleClose();
    };

    // Existing Queue for the Class
    const [ticketList, setTicketList] = useState([]);

    const loadTickets = async () => {
        let apiBaseUrl= `api/ticket/find_all_tickets?queue_id=${courseId}`;
        let newList = [];
        await api.get(apiBaseUrl, {withCredentials:true})
        .then ( async (response) => {
            let data = response.data.result;
            for (var x of data) {
                var ticketInfo = x.ticket_info;
                let stuName = "";
                const getName = async (id) => {
                    let apiBaseUrl= `api/users/get_user?user_id=${id}`;
                    await api.get(apiBaseUrl, {withCredentials:true})
                    .then((response) => {
                        let stu =  response.data.result;
                        stuName = stu.fname + " " + stu.lname;
                        newList.push([<Ticket 
                            name={stuName}
                            room={ticketInfo.room}
                            seat={ticketInfo.workstation}
                            description={ticketInfo.description}
                            time={ticketInfo.created_at.substring(17)}
                            date={ticketInfo.created_at.substring(0,16)}
                            helpType={ticketInfo.help_type}
                            tagArray={dummy}/>]);
                    });
                }
                await getName(ticketInfo.ec_student_id);
            }
            setTicketList(newList);
            
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });
    };

    const clickQuestion = () => {
        setHelpType(0);
    };
    const clickCheckoff = () => {
        setHelpType(1);
    }

    useEffect(() => {
        loadTickets();
    },[]);

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
                                          backgroundColor : helpType == 0 ? "#2A667B" : "#CCCCCC",
                                          fontWeight: helpType == 0  ? "bold" : "normal" }}>Question</Button>
                        <Button variant="contained" onClick= {clickCheckoff} className={classes.tab} disableElevation
                                style = {{ color: "#FFFFFF",
                                           backgroundColor : helpType == 1 ? "#2A667B" : "#CCCCCC",
                                           fontWeight: helpType == 1 ? "bold" : "normal" }}>Checkoff</Button>
                    </DialogActions>
                    { helpType == 0 ? (<DialogTitle className={classes.title} id="form-dialog-title">Create Question</DialogTitle>)
                                  : (<DialogTitle className={classes.title} id="form-dialog-title">Create Checkoff</DialogTitle>) }
                    <DialogContent>
                        { helpType == 0 ? 
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
                                <Select native onChange={(event) => setRoom(event.target.value)}>
                                    <option aria-label="None" value="" />
                                    <option value={"B250"}>B250</option>
                                    <option value={"B240"}>B240</option>
                                    <option value={"B250"}>B260</option>
                                    <option value={"B260"}>Hallway</option>
                                </Select>
                            </FormControl>

                            <FormControl variant="standard" className={classes.locationfield} fullWidth>
                                <InputLabel htmlFor="age-native-simple">Seat</InputLabel>
                                <Select native onChange={(event) => setSeat(event.target.value)}>
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
            {ticketList}  
        </div>
    );
} 