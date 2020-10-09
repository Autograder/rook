import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/StudentCheckoffStyle';
import Navbar from '../components/Navbar';
import { Context } from '../context/Context';
import { useHistory } from 'react-router-dom';

export default function Settings() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const {state: {userId}} = useContext(Context);
    let history = useHistory();

    if (!userId) {
        history.push('./forbidden');
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