import React, {useState} from 'react';
import { Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import Styles from '../style/TicketStyle';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'; 
import FormDialog from './FormDialog';

export default function Ticket(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;

	const [date, setDate] = useState(props.date);
	const [time, setTime] = useState(props.time);
	const [location, setLocation] = useState(props.location);
	const [description, setDescrip] = useState(props.description);

	const setTicket = (location:string, date:string, time:string, description:string) => {
		setDate(date);
		setTime(time);
		setLocation(location);
		setDescrip(description);
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
							<FormDialog/>
							<Button variant="contained"
									startIcon={<EditIcon/>}
									className={classes.button}
									onClick={() => setTicket("name", "date", "time", "description")} 
									>Edit</Button>
						</div>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>
			</ThemeProvider>
		</div>
	);
}