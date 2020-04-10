import React, {useState} from 'react';
import { Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Checkbox, FormControlLabel } from '@material-ui/core';
import Styles from '../style/TicketStyle';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'; 
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

export default function Ticket(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;

	const [location, setLocation] = useState(props.location);
	const [description, setDescrip] = useState(props.description);

	const [tempLocation, setTempLocation] = useState(location);
	const [tempDescription, setTempDescrip] = useState(description);


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

	const [open, setOpen] = React.useState(false);
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setAnon(false); setGS(false); setS(false); setA(false); setPL(false); setImp(false); setT(false);
      setRE(false); setCE(false); setIB(false); setWO(false); setIL(false); setCQ(false);
	  setOpen(false);
	};

	const handleEdit = (location:string, description:string) => {
		setLocation(location);
		setDescrip(description);
		handleClose();
	}

	return (
		<div className={classes.container}>
			<ThemeProvider theme={theme}>
				<ExpansionPanel square={false} className={classes.root}>
        			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1bh-content" id="panel1bh-header">
						<ConfirmationNumberIcon className={classes.ticketIcon}/>
						<div className={classes.columnleft}>
  							<Typography className={classes.title} align="left"> {props.name}</Typography>
						</div>
						<div className={classes.columnright}>
							<Typography className={classes.location} align="right"> {location}</Typography>
						</div>
        			</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.body}>
						<Typography><b>Date: </b>{props.date}</Typography>
						<Typography><b>Time: </b>{props.time}</Typography>
						<Typography><b>Location: </b>{location}</Typography>
						<Typography><b>Description: </b>{description}</Typography>
						<div className={classes.buttonDiv}>
							<Button variant="contained" startIcon={<EditIcon/>} className={classes.button} onClick={() => handleClickOpen()} >Edit</Button>
						</div>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>
			</ThemeProvider>
			
			<ThemeProvider theme={inverseTheme}>
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
		  			<DialogTitle id="form-dialog-title" className={classes.dialog}>Edit Ticket</DialogTitle>
		  			<DialogContent className={classes.dialog}>
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
                            onChange = {(e) => setTempLocation(e.target.value)}
                            variant="outlined"
							id="name"
							defaultValue={location}
                            label="Location"
                            rows="1"
                            fullWidth
                        />
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
						<Button onClick={() => handleEdit(tempLocation, tempDescription)} color="secondary">Submit</Button>
		  			</DialogActions>
				</Dialog>
			</ThemeProvider>

		</div>
	);
}