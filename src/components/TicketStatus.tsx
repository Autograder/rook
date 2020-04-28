import React from 'react';
import { Typography, Box, Card, CardContent } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Styles from '../style/TicketStatusStyle';
import OurTheme from '../style/Theme';

export default function TicketStatus(props:any) {
    const classes = Styles.useStyles();
    const theme = OurTheme.theme;

	function chooseStatusType () {
		switch(props.type) {
			case "Created":
				return classes.created;
			case "Resolved":
				return classes.resolved;
			case "Returned":
				return classes.returned;
			case "Accepted":
				return classes.accepted;
			case "Edited":
				return classes.edited;
		}
	}

	let statusType = chooseStatusType();	

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Card variant='outlined' className={statusType}>
                    <CardContent>
                        <Typography variant="body2" className={classes.statusTitle} > {props.type} </Typography>
						<Typography variant="body2"> By: {props.person} </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </Box>
    );
}