import OurTheme from "../style/Theme";
import PropTypes from "prop-types";
import React from "react";
import Styles from "../style/NavbarStyle";
import { ThemeProvider } from "@material-ui/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@material-ui/core"; 



export default function Feedback(props) {
    Feedback.propTypes = {
        open: PropTypes.bool,
        handleClose: PropTypes.func,
    };

    const classes = Styles.useStyles();
    const { inverseTheme } = OurTheme;
    const {open, handleClose} = props;
    
    const handleSubmit = () => {
        // TODO: Send an email with their feedback to AG email
        // TODO: Display a banner saying feedback submitted
        handleClose();
    }

    return (
        <ThemeProvider theme={inverseTheme}>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle className={classes.form}>Submit Feedback</DialogTitle>
                <DialogContent>
                    <Typography className={classes.text}>Please let us know if you have suggestions to improve our site.</Typography>
                    <TextField
                        className={classes.text}
                        variant="outlined"
                        label="Title"
                        fullWidth
                    />
                    <br/>
                    <TextField
                        className={classes.text}
                        variant="outlined"
                        label="Feedback"
                        multiline
                        fullWidth
                        rows="6"
                    />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.form} onClick={handleSubmit} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}