import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Styles from "../style/NoEnrolledCoursesStyle";
import OurTheme from "../style/Theme";

export default function NoEnrolledCourses () {

    const classes = Styles.useStyles();
    const { theme } = OurTheme;

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.text}>You are not enrolled in any courses.</div>
        </ThemeProvider>
    );
}