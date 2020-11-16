import { Button, Collapse, TextField, Typography} from "@material-ui/core";
import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import OurTheme from "../style/Theme";
import Styles from "../style/ForgotPasswordStyle";
import {ThemeProvider} from "@material-ui/styles";
import server from "../server";

export default function ForgotPassword() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = React.useState("");

    const [alertColor, setAlertColor] = React.useState("success");

    const handleSubmit = () => {
        server.forgotPassword(email)
            .then(function(response) {
                console.log(response)
                handleOpen("Email successfully sent.", response.status)
            })
            .catch((err) => handleOpen("Email not found."))
    }

    const handleOpen = (message, responseStatus) => {
        setMessage(message)
        setAlertColor(responseStatus === 200 ? "success" : "error")
        setOpen(true)
        setTimeout(() => { setOpen(false) }, 2000)
        // route them back home
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.alert}>
                    <Collapse in={open}>
                        <Alert onClose={() => handleClose()} severity={alertColor}>{message}</Alert>
                    </Collapse>
                </div>
                <div className={classes.page}>
                    <div className={classes.wrapper1}>
                        <div className={classes.wrapper}>
                            <Typography className={classes.title}>Forgot Password</Typography>
                        </div>
                        <div className={classes.body}>
                            <Typography>Enter your official UCSD email address and follow the instructions given to you to reset your password.</Typography>
                            <form className={classes.form}>
                                <TextField className={classes.formControl} fullWidth id="standard-basic" label="Email Address" variant="outlined"
                                            onChange={e => setEmail(e.target.value)}/>
                            </form>
                        </div>
                        <div className={classes.wrapper}>
                            <Button className={classes.submit} onClick={handleSubmit} variant="outlined" color="primary">Submit</Button>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}