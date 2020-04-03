import React from 'react';
import { Typography, Box, Card, CardContent } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Styles from '../style/MessageStyle';
import OurTheme from '../style/Theme';

export default function Message(props:any) {
    const classes = Styles.useStyles();
    const theme = OurTheme.theme;

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Card variant='outlined' className={classes.message}>
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