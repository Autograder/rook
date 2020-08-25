import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Queue from '../components/Queue';
import MessageWidget from '../components/MessageWidget';
import TicketStatusWidget from '../components/TicketStatusWidget';
import { ThemeProvider } from '@material-ui/styles';
import { Grid, Dialog, DialogActions, Button, TextField, DialogContent, DialogTitle } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/QueuePageStyle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AddCommentIcon from '@material-ui/icons/AddComment';

export default function QueuePage() {
    const inverseTheme = OurTheme.inverseTheme;
    const classes = Styles.useStyles();
    const [open, setOpen] = useState(false);

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

    return (
        <div className={classes.body}> 
            <ThemeProvider theme={inverseTheme}>
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
