import React from 'react';
import Navbar from './Navbar';
import Message from './Message';
import Ticket from './Ticket';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import OurTheme from '../style/Theme';
import Styles from '../style/QueueStyle';

export default function Queue() {
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
                        <AddToQueueIcon className={classes.icon}/>
                        <Ticket name="Shaeli Yao" location="B250-6" description="I hate programming"/>
                        <Ticket name="Tiffany Meng" location="B240-12" description="I have a bad bug"/>
                        <Ticket name="Anonymous" location="" description="This content is hidden"/>
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
