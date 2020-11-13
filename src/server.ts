import api from './conf'

const server:any = {
	/* USER */
	getUser(id:any) {
		const params = {id: id}
		return api.get('/api/users/get', {params: params})
	},
	checkPassword(email: any, password: any) {
		const payload: object = {
			"email": email,
			"password": password
		}
		return api.post('/api/users/check_password', payload)
	},
	updateUser(id: any, fname: string) {
		const payload: object = {
			"id": id,
			"fname": fname,
		}
		return api.put('/api/users/update_user', payload)
	},
	resetPassword(id: any, newPassword: string, currPassword: string) {
		const payload: object = {
			"id": id,
			"password": newPassword,
			"old_password": currPassword
		}
		return api.put('/api/users/reset_password', payload)
	},
	forgotPassword(email: any) {
		const payload: object = {
			"email": email
		}
		return api.put('/api/users/forgot_password', payload)
	},
	/* COURSE */
	createCourse(name: any, quarter: any, short_name: any,
				url: any, year: any, active: boolean, cse: boolean, inst_id: number) {
		const payload: Object = {
			'name': name,
			'quarter': quarter,
			'short_name': short_name,
			'url': url, // TODO: URL to homepage
			'year': year,
			'active': active,
			'cse': cse, // TODO: MAYBE
			'inst_id': inst_id
		}
		return api.post('/api/queue/create_course', payload)
	},
	autoOpenQueue(id: any, user_id: any, action_type: any) {
		const payload: object = {
			'queue_id': id,
			'user_id': user_id,
			'action_type': action_type 
		}
		return api.post('/api/queue/login_grader', payload)
	},
	autoCloseQueue(id: any, user_id: any, action_type: any) {
		const payload: object = {
			'queue_id': id,
			'user_id': user_id,
			'action_type': action_type 
		}
		return api.post('/api/queue/logout_id', payload)
	},
	findQueueforCourse(course_id: any) {
		const params = {course_id: course_id}
		return api.get('/api/queue/find_queue_for_course', {params: params})		
	},
	/* TICKET */
	addTicket(queue_id: any, student_id: any, title: any, 
				description: any, room: any, workstation: any, is_private: any,
				help_type: any, tag_list: any) {
		// TODO: title: what is title of a ticket?
		const payload = {
			'queue_id': queue_id,
			'student_id': student_id,
			'title': title,
			'description': description,
			'room': room,
			'workstation': workstation,
			'is_private': is_private,
			'help_type': help_type,
			'tag_list': tag_list
		}
		return api.post('api/ticket/add_ticket', payload)
	},
	getUserPermissions(user_id: any, ticket_id: any) {
		const payload = {
			'user_id': user_id,
			'ticket_id': ticket_id
		}
		return api.post('api/ticket/get_user_permissions', payload)
	},
	studentUpdateTicket(ticket_id: any, cancel: any, title: any, 
						description: any, room: any, workstation: any, help_type: any,
						is_private: any) {
		// TODO: this should be a put
		const payload = {
			'ticket_id': ticket_id,
			'cancel': cancel,
			'title': title,
			'description': description,
			'room': room,
			'workstation': workstation,
			'help_type': help_type,
			'is_private': is_private
		}
		return api.post('api/ticket/student_update', payload)
	},
	graderUpdateTicket(ticket_id: any, status: any) {
		// TODO: should this include which grader made an update
		const payload = {
			'ticket_id': ticket_id,
			'status': status
		}
		return api.post('api/ticket/grader_update', payload)
	},
	findAllTickets(queue_id: any) {
		//TODO: find all the tickets that are accepted or pending acceptance?
	},
	submitTicketFeedback(ticket_id: any, rating: any, feedback: any, is_anonymous: any) {
		const payload = {
			'ticket_id': ticket_id,
			'rating': rating,
			'feedback': feedback,
			'is_anonymous': is_anonymous
		}
		return api.post('api/feedback_api/add_feedback', payload)
	}
	// TODO: comments on the ticket
}


export default server;
