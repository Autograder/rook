import {Context} from "../context/Context";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import server from "../server"
import Styles from "../style/ProfileSectionStyle";
import { Button, TextField } from "@material-ui/core";
import React, {useContext, useState} from "react";

export default function ProfileSection(props) {
  ProfileSection.propTypes = {
    user: PropTypes.object,
    handleOpen: PropTypes.func,
  };

  const classes = Styles.useStyles();
  const [fname, setFName] = useState(props.user.fname)
  const [currPassword, setCurrPassword] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const [retypeNewPassword, setRetypeNewPassword] = useState(null)

  const {updateuser} = useContext(Context);

  const handleUserInfo = () => {
    server.updateUser(props.user.id, fname)
      .then(function(response) {
        props.handleOpen("Profile successfully updated.", response.status)
        updateuser(response.data.result)
      })
      .catch((err) => console.log(err))
  }

  const handleResetPassword = () => {
    server.resetPassword(props.user.id, newPassword, currPassword)
      .then(function(response) {
        props.handleOpen("Password successfully reset.", response.status)
      })
      .catch(() => props.handleOpen("Incorrect password information."))
  }

	return (
    <>
      <div className={classes.topRow}>
        <PersonIcon color="primary" className={classes.profileIcon}/>
        <h2>{props.user.fname} {props.user.lname}</h2>
      </div>
      <h2 className={classes.h2}>User Info</h2>
      <form className={classes.form}>
        <TextField className={classes.formControl} label="First Name" variant="outlined" defaultValue={fname}
                   onChange={e => setFName(e.target.value)}/>
        <TextField className={classes.formControl} disabled label="Last Name" variant="outlined" defaultValue={props.user.lname}/>
      </form>
      <Button onClick={handleUserInfo} className={classes.submit} variant="outlined" color="primary">Submit</Button>

      <h2 className={classes.h2}>Reset Password</h2>
      <form className={classes.form}>
        <TextField className={classes.formControl} type="password" label="Current Password" variant="outlined" defaultValue={currPassword}
                   onChange={e => setCurrPassword(e.target.value)}/>
        <TextField className={classes.formControl} type="password" label="New Password" variant="outlined" defaultValue={newPassword}
                   onChange={e => setNewPassword(e.target.value)}/>
        <TextField className={classes.formControl} type="password" label="Retype New Password" variant="outlined" defaultValue={retypeNewPassword}
                   onChange={e => setRetypeNewPassword(e.target.value)}/>
      </form>
      <Button onClick={handleResetPassword} className={classes.submit} variant="outlined" color="primary">Reset Password</Button>
    </>
  );
}