import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogActions, DialogContent, Button, TextField, Checkbox, Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, FormControlLabel, FormControl, InputLabel, Select } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EditIcon from '@material-ui/icons/Edit'; 
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/TicketStyle';

// Need post request to send checkbox data to database

export default function Ticket(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;

    const [room, setRoom] = useState(props.room);
    const [seat, setSeat]= useState(props.seat);
	const [description, setDescrip] = useState(props.description);
	const [tags, setTags] = useState(props.tags);

    const [tempRoom, setTempRoom] = useState(props.room);
    const [tempSeat, setTempSeat]= useState(props.seat);
    const [tempDescription, setTempDescrip] = useState(description);

    // Hide from classmates
    const [anonymous, setAnon] = useState(false);

    // I need help with...
    const [gettingStarted, setGS] = useState(props.tagArray["gettingStarted"]);
    const [specifications, setS] = useState(props.tagArray["specifications"]);
    const [algorithms, setA] = useState(props.tagArray["algorithms"]);
    const [progLang, setPL] = useState(props.tagArray["progLang"]);
    const [implementation, setImp] = useState(props.tagArray["implementation"]);
    const [testing, setT] = useState(props.tagArray["testing"]);
    
    // Program Issues
    const [runtimeError, setRE] = useState(props.tagArray["runtimeError"]);
    const [compileError, setCE] = useState(props.tagArray["compileError"]);
    const [incorrectBehavior, setIB] = useState(props.tagArray["incorrectBehavior"]);
    const [wrongOutput, setWO] = useState(props.tagArray["wrongOutput"]);
    const [infiniteLoop, setIL] = useState(props.tagArray["infiniteLoop"]);

    // Other
    const [conceptualQuestion, setCQ] = useState(props.tagArray["conceptualQuestion"])

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

	const [open, setOpen] = React.useState(false);
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setAnon(false); setGS(false); setS(false); setA(false); setPL(false); setImp(false); setT(false);
      setRE(false); setCE(false); setIB(false); setWO(false); setIL(false); setCQ(false);
	  setOpen(false);
	};

	const handleEdit = (room:string, seat:string, description:string) => {
        setRoom(room);
        setSeat(seat);
        setDescrip(description);
		handleClose();
    }
    
    // DUMMY VARIABLE --> Would be "help type" from the database
    // Submit for edit is different based on help type
    const isTicket = false 

	return (
		<div className={classes.container}>
			<ThemeProvider theme={theme}>
				<ExpansionPanel square={false} className={classes.root}>
        			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1bh-content" id="panel1bh-header">
                    { isTicket ? (<ConfirmationNumberIcon className={classes.ticketIcon}/>) : (<CheckBoxIcon className={classes.ticketIcon}/>)}
                        <div className={classes.table}>
                            <div className={classes.tableRow}>
                                <div className={classes.tableLeft}>
                                    <Typography className={classes.title} align="left"> {props.name}</Typography>
                                </div>
                                <div className={classes.tableRight}>
                                    <Typography className={classes.location} align="right">{room}-{seat}</Typography>
                                </div>
                            </div>
                        </div>
        			</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.body}>
						<Typography><b>Date: </b>{props.date}</Typography>
						<Typography><b>Time: </b>{props.time}</Typography>
						<Typography><b>Location: </b>{room}-{seat}</Typography>
						<Typography><b>Description: </b>{description}</Typography>
                        { isTicket && <Typography><b>Tags: </b>{tags}</Typography> }
						<div className={classes.buttonDiv}>
							<Button variant="contained" startIcon={<EditIcon/>} className={classes.button} onClick={() => handleClickOpen()} >Edit</Button>
						</div>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>
			</ThemeProvider>
			
			<ThemeProvider theme={inverseTheme}>
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
		  			{isTicket ? (<DialogTitle id="form-dialog-title" className={classes.dialog}>Edit Question</DialogTitle>)
                              : (<DialogTitle id="form-dialog-title" className={classes.dialog}>Edit Checkoff</DialogTitle>)}
		  			<DialogContent className={classes.dialog}>
                        { isTicket &&
                        <div>
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
                        </div> }

                        <FormControl variant="standard" className={classes.locationfield} fullWidth>
                            <InputLabel htmlFor="age-native-simple">Room</InputLabel>
                            <Select native onChange = {(e) => setTempRoom(e.target.value)} >
                                <option aria-label="None" value=""/>
                                <option value={"B250"}>B250</option>
                                <option value={"B240"}>B240</option>
                                <option value={"B250"}>B260</option>
                                <option value={"B260"}>Hallway</option>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" className={classes.locationfield} fullWidth>
                            <InputLabel htmlFor="age-native-simple">Seat</InputLabel>
                            <Select native onChange = {(e) => setTempSeat(e.target.value)} >
                                <option aria-label="None" value="" />
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </Select>
                        </FormControl>

                        <TextField
                            className={classes.text}
                            onChange = {(e) => setTempDescrip(e.target.value)}
                            variant="outlined"
							id="name"
							defaultValue={description}
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
						<Button onClick={() => handleEdit(tempRoom, tempSeat, tempDescription)} color="primary">Submit</Button>
		  			</DialogActions>
				</Dialog>
			</ThemeProvider>

		</div>
	);
}

/*
<TextField
className={classes.text}
onChange = {(e) => setTempLocation(e.target.value)}
variant="outlined"
id="name"
defaultValue={location}
label="Location"
rows="1"
fullWidth
/>
*/