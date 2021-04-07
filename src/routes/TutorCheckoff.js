import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Typography } from '@material-ui/core';

export default function TutorCheckoff() {
    const {state: {user} } = useContext(Context);

    if (!user) {
        return <Typography> You must be logged in! </Typography>
    }
    
    return (
        <div></div>
    );
}