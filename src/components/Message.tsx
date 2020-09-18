import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/MessageStyle';

export default function Message(props:any) {
    const classes = Styles.useStyles();
    const theme = OurTheme.theme;
    const messageclass = props.received ? classes.messageyou : classes.messageme;
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Card variant='outlined' className={messageclass}>
                    <CardContent>
                        <Typography variant="body2">
                            {props.sender}
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            {props.message}
                        </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </Box>
    );
}
