import OurTheme from "../style/Theme";
import PropTypes from "prop-types";
import React from "react";
import Styles from "../style/MessageStyle";
import { ThemeProvider } from "@material-ui/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

export default function Message(props) {
    Message.propTypes = {
        received: PropTypes.bool,
        sender: PropTypes.string,
        message: PropTypes.string
    }

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
