import React, { useState } from 'react';
import { TextField, Typography, Collapse, Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ForgotPasswordStyle';

export default function ForgotPassword() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        setOpen(true)
        setTimeout(() => { setOpen(false) }, 2000)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div className={classes.alert}>
                    <Collapse in={open}>
                        <Alert onClose={() => handleClose()} severity="success">Email successfully sent.</Alert>
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
                                <TextField className={classes.formControl} fullWidth id="standard-basic" label="Email Address" variant="outlined"/>
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