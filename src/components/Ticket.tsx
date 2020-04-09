import React, {useState} from 'react';
import { Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import Styles from '../style/TicketStyle';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function Ticket(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	const inverseTheme = OurTheme.inverseTheme;

	const [date, setDate] = useState(props.date);
	const [time, setTime] = useState(props.time);
	const [location, setLocation] = useState(props.location);
	const [description, setDescrip] = useState(props.description);

	const [tempDate, setTempDate] = useState(date);
	const [tempTime, setTempTime] = useState(time);
	const [tempLocation, setTempLocation] = useState(location);
	const [tempDescription, setTempDescrip] = useState(props.description);

	const [open, setOpen] = React.useState(false);
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};

	const handleEdit = (location:string, date:string, time:string, description:string) => {
		setDate(date);
		setTime(time);
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
						<Typography><b>Date: </b>{date}</Typography>
						<Typography><b>Time: </b>{time}</Typography>
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
						<TextField autoFocus onChange={(e) => setTempDate(e.target.value)} margin="dense" id="name" label="Date" defaultValue={date} type="email" variant="filled" multiline fullWidth/>
						<TextField autoFocus onChange={(e) => setTempLocation(e.target.value)} margin="dense" id="name" label="Location" defaultValue={location} type="email" variant="filled" multiline fullWidth/>
						<TextField autoFocus onChange={(e) => setTempTime(e.target.value)} margin="dense" id="name" label="Time" defaultValue={time} type="email" variant="filled" multiline fullWidth/>
						<TextField autoFocus onChange={(e) => setTempDescrip(e.target.value)} margin="dense" id="name" label="Description" defaultValue={description} type="email" variant="filled" multiline fullWidth/>
		  			</DialogContent>
		  			<DialogActions>
						<Button onClick={() => handleEdit(tempDate, tempTime, tempLocation, tempDescription)} color="secondary">Submit</Button>
		  			</DialogActions>
				</Dialog>
			</ThemeProvider>

		</div>
	);
}