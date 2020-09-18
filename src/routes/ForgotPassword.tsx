import React, { useState } from 'react';
import { TextField, Typography, Collapse, Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ForgotPasswordStyle';
import server from '../server'

export default function ForgotPassword() {
    const theme = OurTheme.theme;
    const classes = Styles.useStyles();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = React.useState('');

    type Color = 'success' | 'info' | 'warning' | 'error';
    const [alertColor, setAlertColor] = React.useState<Color>('success');

    const handleSubmit = () => {
        server.forgotPassword(email)
            .then(function(response: any) {
                console.log(response)
                handleOpen('Email successfully sent.', response.status)
            })
            .catch((err:any) => handleOpen('Email not found.'))
    }

    const handleOpen = (message: string, responseStatus?: any) => {
        setMessage(message)
        setAlertColor(responseStatus === 200 ? 'success' : 'error')
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