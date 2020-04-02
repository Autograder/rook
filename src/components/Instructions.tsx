import React from 'react';
import Navbar from './Navbar';
//import OurTheme from '../style/Theme';
//import Styles from '../style/InstructionsStyle';

export default function Instructions() {
    //const theme = OurTheme.theme;
	//const classes = Styles.useStyles();
    return (
        <div>
            <Navbar/>
            <h1> Instructions </h1>
            <h5> Hello! This is where instructions to sign up for Autograder will live. Should be mostly a static page with a few links/redirects. </h5>
        </div>
    );
}