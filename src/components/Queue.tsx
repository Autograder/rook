import React, {useState} from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Ticket from './Ticket';
import OurTheme from '../style/Theme';
import Styles from '../style/QueueStyle';
//import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

function getDay() {
    var tempDate = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var day = months[tempDate.getMonth()] + ' ' + tempDate.getDate() + ', ' + tempDate.getFullYear()
    return day;
}

function getTime() {
    var tempTime = new Date();
    var meridian = '';
    var hours = tempTime.getHours();
    if (hours > 11) {
        meridian = 'pm';
        if (hours > 12) {
            hours = hours - 12;
        }
    } else {
        meridian = 'am';
    }
    var time = hours + ':' + tempTime.getMinutes() + ' ' + meridian;
    return time;

}

export default function Queue() {
    const classes = Styles.useStyles();
    const inverseTheme = OurTheme.inverseTheme;
    const [open, setOpen] = useState(false);

    // Fields for Ticket
    const [description, setDescrip] = useState('');
    const [location, setLocation] = useState('');

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
        setOpen(false);
    };

    const handleSubmit = () => {
        setTicketList(
            ticketList.concat([
                <Ticket name={"John Doe"} location={location}
                description={description}
                time={getTime()}
                date={getDay()}
                tags=''/>]));
        handleClose();
    }

    // Existing Queue for the Class
    const [ticketList, setTicketList] = useState(
        [<Ticket name='Sravya Balasa' location='B250-6'
        description='I need help with a bug'
        time='12:34pm'
        date='April 1, 2020'
        tags=''/>]
    );

    return (
        <div>
            <IconButton aria-label="delete" onClick={() => handleClickOpen()} className={classes.icon}>
                <AddCircleOutlineIcon/>
            </IconButton>
            <ThemeProvider theme={inverseTheme}>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle className={classes.form} id="form-dialog-title">Create a Ticket</DialogTitle>
                    <DialogContent>
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
                        <TextField
                            className={classes.text}
                            onChange = {(e) => setLocation(e.target.value)}
                            variant="outlined"
                            id="name"
                            label="Location"
                            rows="1"
                            fullWidth
                        />
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
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.form} onClick={handleSubmit} color="primary">Submit</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
            {ticketList}  
        </div>
    );
} 