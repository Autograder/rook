import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import OurTheme from '../style/Theme';
import Styles from '../style/ProfileSectionStyle';
import PersonIcon from '@material-ui/icons/Person';
import { TextField, Typography, Grid, Select, Button, FormControl, InputLabel, Collapse } from '@material-ui/core';
import { userInfo } from 'os';

export default function ProfileSection(props:any) {
  const theme = OurTheme.theme;
  const classes = Styles.useStyles();

  const handleSubmit = () => {
    props.setOpen(true)
    setTimeout(() => { props.setOpen(false) }, 5000)
  }

	return (
    <>
      <div className={classes.topRow}>
        <PersonIcon color="primary" className={classes.profileIcon}/>
        <h2>{props.user.fname} {props.user.lname}</h2>
      </div>
      <h2 className={classes.h2}>User Info</h2>
      <form className={classes.form}>
        <TextField className={classes.formControl} label="First Name" variant="outlined" defaultValue={props.user.fname}/>
        <TextField className={classes.formControl} disabled label="Last Name" variant="outlined" defaultValue={props.user.lname}/>
      </form>
      <h2 className={classes.h2}>Reset Password</h2>
      <form className={classes.form}>
        <TextField className={classes.formControl} type="password" label="Current Password" variant="outlined"/>
        <TextField className={classes.formControl} type="password" label="Retype Password" variant="outlined"/>
        <TextField className={classes.formControl} type="password" label="New Password" variant="outlined"/>
      </form>
      <Button onClick={handleSubmit} className={classes.submit} variant="outlined" color="primary">Submit</Button>
    </>
  );
}