import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/StudentCheckoffStyle';
import Navbar from '../components/Navbar';
import { Context } from '../context/Context';
import { Typography } from '@material-ui/core';

export default function Settings() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const {state: {userId}} = useContext(Context);

    if (!userId) {
        return <Typography> You must be logged in! </Typography>
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <h1 className={classes.header}>Settings</h1>
            </ThemeProvider>
        </div>
    );
}