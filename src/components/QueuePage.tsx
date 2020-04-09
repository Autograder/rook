import React from 'react';
import Navbar from './Navbar';
import Message from './Message';
import Queue from './Queue';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import OurTheme from '../style/Theme';
import Styles from '../style/QueuePageStyle';

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

                    </Grid>
                    <Grid item xs={6}>
                        <Queue/> 
                    </Grid>
                    <Grid item xs={3}>
                        <MessageIcon className={classes.icon}/>
                        <Message sender="Sravya Balasa" message="Is there anyone in the lab?" received={false}/>
                        <Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
} 
