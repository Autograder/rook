import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/InstructionsStyle';

export default function Instructions() {
    const theme = OurTheme.theme;
	const classes = Styles.useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.page}>
                    <div className={classes.wrapper1}>
                        <div className={classes.wrapper}>
                            <Typography className={classes.title}>Instructions</Typography>
                        </div>
                        <div className={classes.body}>
                            <Typography>Hello! This is where the official instructions for Queues will live.</Typography>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}
