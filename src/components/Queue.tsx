import React from 'react';
import Navbar from './Navbar';
import Message from './Message';
import { ThemeProvider } from '@material-ui/styles';
import { Paper, Grid } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import OurTheme from '../style/Theme';
import Styles from '../style/QueueStyle';

export default function Queue() {
    const theme = OurTheme.theme;
	const classes = Styles.useStyles();
    return (
        <div> 
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Grid container spacing={10}>
                    <Grid item xs={4}>
                        <Paper>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <MessageIcon className={classes.icon}/>
                        <Message sender="Sravya Balasa" message="Is there anyone in the lab?"/>
                        <Message sender="Simonne Contreras" message="Yes, please be PATIENT"/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
} 
