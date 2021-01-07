import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ForbiddenStyle';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function Forbidden() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    let history = useHistory();

    const onButtonPress = () => {
        //go to login screen
        history.push('/login');
    }

    return <>
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div className={classes.title}>Access Denied!</div>
                <div className={classes.subtitle}>You must be logged in to view this page.</div>
                <Button variant="contained" onClick={onButtonPress} className={classes.button}>Click here to log in.</Button>
            </div>
        </ThemeProvider>
    </>
}