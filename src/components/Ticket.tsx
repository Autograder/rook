import React from 'react';
import { Typography } from '@material-ui/core';
import Styles from '../style/TicketStyle';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Ticket() {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;

	return (
		<div className={classes.container}>
			<ThemeProvider theme={theme}>
				<ExpansionPanel className={classes.root}>
        			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1bh-content"
          				id="panel1bh-header"
        			>
						<ConfirmationNumberIcon className={classes.ticketIcon}/>
						<div className={classes.columnleft}>
  							<Typography className={classes.title} align="left">Your mom and all her friends </Typography>
						</div>
						<div className={classes.columnright}>
							<Typography className={classes.location} align="right">Hallway</Typography>
						</div>
        			</ExpansionPanelSummary>
        			
					<ExpansionPanelDetails>
          				<Typography>
            				Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            				maximus est, id dignissim quam.
          				</Typography>
        			</ExpansionPanelDetails>
      			</ExpansionPanel>

			</ThemeProvider>
		</div>
	);
}