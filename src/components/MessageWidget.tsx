import React from 'react';
import Message from './Message';

export default function MessageWidget() {
	return (
		<div>
			<Message sender="Sravya Balasa" message="Is there anyone in the lab?" received={false}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
			<Message sender="Simonne Contreras" message="Yes, please be PATIENT" received={true}/>
		</div>
	);
}
/*
<IconButton aria-label="delete" onClick={() => handleClickOpen()} className={classes.icon}>
                <AddCircleOutlineIcon/>
			</IconButton>
			*/