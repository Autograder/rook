import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';
import Queue from '../components/Queue';
import MessageWidget from '../components/MessageWidget';
import TicketStatusWidget from '../components/TicketStatusWidget';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import { Grid, Dialog, DialogActions, Button, TextField, DialogContent, DialogTitle, Switch, Typography } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/QueuePageStyle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Context } from '../context/Context';
import api from '../conf';

export default function QueuePage() {
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const {state: {userId, queueId, courseId}, signin } = useContext(Context);
    const [onDuty, setOnDuty] = useState(false);
    const [tutorsOnDuty, setTutorsOnDuty] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    //console.log("user: ", userId);
   //onsole.log("on Duty? ", onDuty);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmit = () => {
        // right now realizing that i don't know how to make messages connect to tickets?
        // and render the right tickets for a student
        // and add messages when i need to...where i need to...um...
        handleClose()
    }

    const loginGrader = async () => {
        const q_id = parseInt(queueId);
        const u_id = parseInt(userId);
        let apiBaseUrl : string = "/api/queue/login_grader";
        let payload : object = {
            "queue_id" : q_id,
            "user_id" : u_id,
            "action_type" : "MANUAL"
        };
    
        await api.post(apiBaseUrl, payload)
        .then ((response) => {
            console.log("success");
            
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });
    }

    const logoutGrader = async () => {
        const q_id = parseInt(queueId);
        const u_id = parseInt(userId);
        let apiBaseUrl : string = "/api/queue/logout_grader";
        let payload : object = {
            "queue_id" : q_id,
            "user_id" : u_id,
            "action_type" : "MANUAL"
        };
    
        await api.post(apiBaseUrl, payload)
        .then ((response) => {
            console.log("success");
            
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });
    }

    const handleOnDutyToggle = () => {
        if(onDuty){
            logoutGrader();
            setOnDuty(false);
            setTutorsOnDuty(tutorsOnDuty - 1);
        } else {
            loginGrader();
            setOnDuty(true);
            setTutorsOnDuty(tutorsOnDuty + 1);
        }
    }

    const getActiveTutors = async () => {
        let apiBaseUrl : string = `/api/enrolled_course/find_active_tutor_for?queue_id=${queueId}`;
    
        await api.get(apiBaseUrl)
        .then ((response) => {
            // Direct to queue page
            setTutorsOnDuty(response.data.result.length);
            
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });

         setIsLoaded(true);
    }

    /* const nameString = () => {
        let tutorStr = '';
        var i;

        if(tutorsOnDuty.length === 0) {
            return "None";
        }

        for (i = 0; i < tutorsOnDuty.length; i++) {
            tutorStr += tutorsOnDuty[i].fname + " " + tutorsOnDuty[i].lname;
            if( i !== tutorsOnDuty.length - 1){
                tutorStr += ", ";
            }
        }

        return tutorStr;

    }; */

    const checkSelf = async () => {
        let apiBaseUrl : string = `api/enrolled_course/get_user_in_course?user_id=${userId}&course_id=${courseId}`;

        await api.get(apiBaseUrl)
        .then ((response) => {
            // Direct to queue page
            var status = response.data.result.enrolled_course_info.status;
            if (status === "ACTIVE"){
                setOnDuty(true);
            } else {
                setOnDuty(false);
            }
            
          })
          // Any number of errors occurred
          .catch((error) => {
            console.log(error.response);
         });
    }

    const TutorSwitch = withStyles({
        switchBase: {
            color: 'white',
            '&$checked': {
            color: '#39ff14',
            },
            '&$checked + $track': {
            backgroundColor: '#39ff14',
            },
        },
        checked: {},
        track: {
            backgroundColor: 'white'
        },
    })(Switch);

    useEffect(() => {
        // load list of tutors
        // request isOnDuty
        getActiveTutors();
        checkSelf();
        
    }, [queueId]);

    if (!userId) {
        history.push('/forbidden');
    }

    return (
        <div className={classes.body}>
            <ThemeProvider theme={inverseTheme}>
                {/* <Button onClick={test} color="primary">TEST</Button>
                <Button onClick={changePage} color="primary">Go To Students</Button> */}
                <Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
                    <DialogTitle className={classes.form} id="form-dialog-title">Add a Comment</DialogTitle>
                    <DialogContent>
                        <TextField
                            className={classes.text}
                            variant="outlined"
                            id="name"
                            label="Comment"
                            multiline
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.form} onClick={handleSubmit} color="primary">Send</Button>
                    </DialogActions>
                </Dialog>
                <Navbar/>
                <br/>
                <Grid container>
                    <Grid container>
                        <Grid item xs={3}>
                            <DynamicFeedIcon className={classes.staticicon}/>
                            <div className={classes.container}>
                                <div className={classes.overflow}>
                                    <TicketStatusWidget/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.container}>
                                <div className={classes.overflow}>
                                    <Queue/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}> 
                            <div className={classes.smallContainer} onClick={handleOnDutyToggle}>
                                { onDuty ? 
                                    <Typography>On Duty</Typography> : 
                                    <Typography>Off Duty</Typography> 
                                }
                                <TutorSwitch
                                    checked={onDuty}
                                    onChange={handleOnDutyToggle}
                                    name="onDuty"
                                />
                             </div>

                            <div className={classes.activeTutors}>
                                {isLoaded && <p>Tutors On Duty: {tutorsOnDuty}</p>}
                            </div>
                            
                            <AddCommentIcon onClick={handleOpen} className={classes.clickableicon}/>  
                            <div className={classes.container}>
                                <div className={classes.overflow}>
                                    <MessageWidget/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
} 
