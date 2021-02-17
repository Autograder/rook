import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Styles from "../style/NoEnrolledCoursesStyle";
import OurTheme from "../style/Theme";
import { Typography } from "@material-ui/core";

export default function NoEnrolledCourses () {

    const classes = Styles.useStyles();
    const { theme } = OurTheme;

    return (
        <ThemeProvider theme={theme}>
            <Typography className={classes.bigText}>
                Queue Unavailable
            </Typography>
            <Typography className={classes.text}>
                You are not enrolled in any courses.
            </Typography>
        </ThemeProvider>
    );
}