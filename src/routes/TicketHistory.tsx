import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { TextField, Typography, Grid, Select, MenuItem, Button, FormControl, InputLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/TicketHistoryStyle';
import { Context } from '../context/Context';

export default function TicketHistory() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const { state:{userId} } = useContext(Context);
    
    if (!userId) {
        return <Typography> You must be logged in! </Typography>
    }
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