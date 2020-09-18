import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
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

export default function QueuePage() {
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const {state: {userId}, signin } = useContext(Context);
    const [onDuty, setOnDuty] = useState(false);
    const { course_id } = useParams();

    const fakeList = 'Shaeli Yao, Simonne Contreras, Sravya Balasa, Tiffany Meng';

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

    const handleOnDutyToggle = () => {
        setOnDuty(!onDuty);
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

    /* useEffect(() => {
        // load list of tutors
        // request isOnDuty
    }, [courseId]) */

    if (!userId) {
        return <Typography> You must be logged in! </Typography>
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
                                <p>Active Tutors: {fakeList}</p>
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
