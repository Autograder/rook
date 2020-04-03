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
          				<Typography className={classes.title}>{props.name}</Typography>
						<Typography className={classes.location}>{props.location}</Typography>
        			</ExpansionPanelSummary>
					<ExpansionPanelDetails>
          				<Typography>
							  {props.description}
          				</Typography>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>

			</ThemeProvider>
		</div>
	);
}