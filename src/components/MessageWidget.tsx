import React from 'react';
import { Typography, Box, Card, CardContent, IconButton } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Styles from '../style/MessageWidgetStyle';
import Message from './Message';
import OurTheme from '../style/Theme';
import MessageIcon from '@material-ui/icons/Message';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function MessageWidget() {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	return (
		<div>
			<MessageIcon className={classes.icon}/>
			<Message sender="Sravya Balasa" message="Is there anyone in the lab?" received={false}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>

			
		</div>
	);
}
/*
<IconButton aria-label="delete" onClick={() => handleClickOpen()} className={classes.icon}>
                <AddCircleOutlineIcon/>
			</IconButton>
			*/