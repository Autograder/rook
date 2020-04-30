import React from 'react';
import Navbar from '../components/Navbar';
import { TextField, Typography, Grid, Select, MenuItem, Button, FormControl, InputLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/TicketHistoryStyle';

export default function TicketHistory() {
    const theme = OurTheme.theme;
	const classes = Styles.useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <div className={classes.wrapper}>
                    <Typography className={classes.title}>Ticket History</Typography>
                </div>
            </ThemeProvider>
        </div>
    );
} 

/* Need to make it resizable for smaller windows */