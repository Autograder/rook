import React from 'react';
import { Card, Typography, CardContent,} from '@material-ui/core';
import Styles from '../style/TicketStyle';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

export default function Ticket() {
	const classes = Styles.useStyles();
	return (
		<div className={classes.container}>
			<Card className={classes.root}>
      			<CardContent>
					<ConfirmationNumberIcon/>
					<Typography className={classes.title}  color="textSecondary" gutterBottom>
						Person Name
        			</Typography>	
      			</CardContent>
    		</Card>
		</div>
	);
}