import React, {useState} from 'react';
import { IconButton, Dialog, DialogContent, DialogTitle, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Ticket from './Ticket';
import OurTheme from '../style/Theme';
import Styles from '../style/QueueStyle';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

export default function Queue() {
    const classes = Styles.useStyles();
    const [anonymous, setAnon] = useState(false);
    const [open, setOpen] = useState(false);
    const [formats, setFormats] = React.useState(() => ['bold']);
    const inverseTheme = OurTheme.inverseTheme;

    const toggleAnon = () => {
        setAnon(!anonymous);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        
    }

    // Existing Queue for the Class
    const [ticketList, setTicketList] = useState(
        [<Ticket name='Sravya Balasa' location='B250-6'
        description='I need help with a bug'
        time='12:34pm'
        date='April 1, 2020'/>]
    );
    
    const setTL = (name:string, date:string, time:string, description:string) => {
        setTicketList(
        ticketList.concat([
        <Ticket name={name} location={name}
        description={description}
        time={time}
        date={date}/>]))
    }
    const [categories, setCategories] = React.useState({
        RunTimeError: false,
        CompileError: false,
        IncorrectBehavior: false,
        ConceptualQuestion: false,
    });

    return (
        <div>
            <IconButton aria-label="delete" onClick={() => handleClickOpen()} className={classes.icon}>
                <AddCircleOutlineIcon/>
            </IconButton>
            <ThemeProvider theme={inverseTheme}>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle className={classes.form} id="form-dialog-title">Create a Ticket</DialogTitle>
                    <DialogContent>
                        <TextField
                            className={classes.text}
                            variant="outlined"
                            id="name"
                            label="Description"
                            multiline
                            rows="6"
                            fullWidth
                        />

                        <ToggleButtonGroup value={formats} aria-label="text formatting">
                            <ToggleButton value="bold" aria-label="bold">
                            </ToggleButton>
                            <ToggleButton value="italic" aria-label="italic">
                            </ToggleButton>
                            <ToggleButton value="underlined" aria-label="underlined">
                            </ToggleButton>
                            <ToggleButton value="color" aria-label="color" disabled>
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <FormControlLabel
                            className={classes.check}
                            control={<Checkbox className={classes.check} onClick={toggleAnon} color="primary" checked={anonymous} name="anonymous" />}
                            label="Hide from Classmates?"
                        />
                        <br/>
                        <Button className={classes.form} onClick={handleClose} color="primary">
                            Submit
                        </Button>
                    </DialogContent>
                </Dialog>
            </ThemeProvider>
            {ticketList}  
        </div>
    );
} 

// setTL("name", "date", "time", "description")