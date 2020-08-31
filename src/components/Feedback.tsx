import React from 'react';
import {Dialog, DialogTitle, DialogContent, TextField, Typography, Button, DialogActions } from '@material-ui/core'; 
import Styles from '../style/NavbarStyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	paper: {
	  marginRight: theme.spacing(2),
	},
  }))

export default function Feedback(props: any) {
    const classes = Styles.useStyles();
    const {open, handleClose} = props;
    
    const handleSubmit = () => {
        handleClose();
        // do more here eventually
    }

    return (
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
    )
}