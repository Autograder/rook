import React from 'react';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/StudentCheckoffStyle';

export default function Settings() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <h1 className={classes.header}>Settings</h1>
            </ThemeProvider>
        </div>
    );
}