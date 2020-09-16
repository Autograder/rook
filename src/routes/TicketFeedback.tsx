import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Typography } from '@material-ui/core';

export default function TicketFeedback() {
    const { state: {userId} } = useContext(Context);

    if (!userId) {
        return <Typography> You must be logged in! </Typography>
    }

    return (
        <div></div>
    );
}