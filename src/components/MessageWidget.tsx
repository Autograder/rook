import React from 'react';
import Styles from '../style/MessageWidgetStyle';
import Message from './Message';
import OurTheme from '../style/Theme';

export default function MessageWidget() {
	const classes = Styles.useStyles();
	const theme = OurTheme.theme;
	return (
		<div>
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