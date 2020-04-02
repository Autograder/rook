import React from 'react';
import Navbar from './Navbar';
//import OurTheme from '../style/Theme';
//import Styles from '../style/ResetStyle';

export default function Reset() {
    //const theme = OurTheme.theme;
	//const classes = Styles.useStyles();
    return (
        <div>
            <Navbar/>
            <h1> Need to Reset your Password? </h1>
            <h5> Hello! This is where instructions to reset your password will be. Should be a mostly static page with a button that will email a new password. </h5>
        </div>
    );
}