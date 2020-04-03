import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import Styles from '../style/TicketStyle';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

export default function Ticket(props:any) {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;

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
							<Typography className={classes.location} align="right"> {props.location}</Typography>
						</div>
        			</ExpansionPanelSummary>
					<ExpansionPanelDetails className={classes.body}>
						<Typography><b>Date: </b>{props.date}</Typography>
						<Typography><b>Time: </b>{props.time}</Typography>
						<Typography><b>Location: </b>{props.location}</Typography>
						<Typography><b>Description: </b>{props.description}</Typography>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>

			</ThemeProvider>
		</div>
	);
}