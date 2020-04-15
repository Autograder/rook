import React from 'react';
import Navbar from './Navbar';
import { TextField, Typography, Button, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/CourseRequestStyle';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function CourseRequest() {
    const theme = OurTheme.theme;
	const classes = Styles.useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <div className={classes.wrapper}>
                    <Typography className={classes.title}>Course Requests</Typography>
                </div>
                <div className={classes.wrapper}>
                    <Container>
                        <Row>
                            <Col className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  id="standard-basic" label="First Name" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Last Name" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Email" variant="outlined"/>
                                </form>
                            </Col>
                            <Col className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  id="standard-basic" label="Course Quarter" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Course Year" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Course Title" placeholder = "Basic Data Structures" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Course Code" placeholder="CSE12" variant="outlined"/>
                                </form>
                            </Col>
                            <Col className={classes.body}>
                                <form className={classes.form}>
                                    <TextField  id="standard-basic" label="Course Roster" variant="outlined"/>
                                    <TextField  id="standard-basic" label="WaitList Roster" variant="outlined"/>
                                    <TextField  id="standard-basic" label="Staff Roster" placeholder = "Basic Data Structures" variant="outlined"/>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <form className={classes.message}>
                                <TextField  id="standard-basic" fullWidth multiline label="Got a message?" variant="outlined"/>
                            </form>
                        </Row>
                    </Container>
                </div>


            </ThemeProvider>
        </div>
    );
} 