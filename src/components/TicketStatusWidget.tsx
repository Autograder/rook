import React from 'react';
import TicketStatus from './TicketStatus';

export default function MessageWidget() {
	return (
		<div>
			<TicketStatus type="Resolved" person="Tiffany Meng"/>
			<TicketStatus type="Accepted" person="Tiffany Meng"/>
			<TicketStatus type="Returned" person="Simonne Contreras"/>
			<TicketStatus type="Edited" person="Shaeli Yao"/>
			<TicketStatus type="Accepted" person="Simonne Contreras"/>
			<TicketStatus type="Created" person="Shaeli Yao"/>
			<TicketStatus type="Created" person="Shaeli Yao"/>
			<TicketStatus type="Created" person="Shaeli Yao"/>
		</div>
	);
}