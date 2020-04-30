import React from 'react';
import Navbar from '../components/Navbar';
import MessageWidget from '../components/MessageWidget';
import Queue from '../components/Queue';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/QueuePageStyle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import TicketStatus from '../components/TicketStatus';

export default function QueuePage() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
   
    return (
        <div> 
            <ThemeProvider theme={theme}>
                <Navbar/>
                <br/>
                <Grid container>
                    <Grid item xs={3}>
                        <DynamicFeedIcon className={classes.icon} />
                        <TicketStatus type="Resolved" person="Tiffany Meng"/>
                        <TicketStatus type="Accepted" person="Tiffany Meng"/>
                        <TicketStatus type="Returned" person="Simonne Contreras"/>
                        <TicketStatus type="Edited" person="Shaeli Yao"/>
                        <TicketStatus type="Accepted" person="Simonne Contreras"/>
                        <TicketStatus type="Created" person="Shaeli Yao"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Queue/> 
                    </Grid>
                    <Grid item xs={3}>
                        <MessageWidget/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
} 
