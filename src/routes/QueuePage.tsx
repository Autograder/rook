import React from 'react';
import Navbar from '../components/Navbar';
import Queue from '../components/Queue';
import MessageWidget from '../components/MessageWidget';
import TicketStatusWidget from '../components/TicketStatusWidget';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import OurTheme from '../style/Theme';
import Styles from '../style/QueuePageStyle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MessageIcon from '@material-ui/icons/Message';

export default function QueuePage() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
   
    return (
        <div className={classes.body}> 
            <ThemeProvider theme={theme}>
                <Navbar/>
                <br/>
                <Grid container>
                    <Grid item xs={3}>
                        <DynamicFeedIcon className={classes.icon} />
                        <div className={classes.container}>
                            <div className={classes.overflow}>
                                <TicketStatusWidget/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.container}>
                            <div className={classes.overflow}>
                                <Queue/> 
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>                     
			            <MessageIcon className={classes.icon}/>
                        <div className={classes.container}>
                            <div className={classes.overflow}>
                                <MessageWidget/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
} 
