import api from "./conf"

const server = {
	getUser(id) {
		const params = {id: id}
		return api.get("/api/users/get_user", {params: params})
	},
	getUserInCourse(user_id, course_id) {
		return api.get(`api/enrolled_course/get_user_in_course?user_id=${user_id}&course_id=${course_id}`)
	},
	checkPassword(email, password) {
		const payload = {
			"email": email,
			"password": password
		}
		return api.post("/api/users/check_password", payload)
	},
	updateUser(id, fname) {
		const payload = {
			"id": id,
			"fname": fname,
		}
		return api.put("/api/users/update_user", payload)
	},
	resetPassword(id, newPassword, currPassword) {
		const payload = {
			"id": id,
			"password": newPassword,
			"old_password": currPassword
		}
		return api.put("/api/users/reset_password", payload)
	},
	forgotPassword(email) {
		const payload = {
			"email": email
		}
		return api.put("/api/users/forgot_password", payload)
	},
	/* COURSE */
	createCourse(name, quarter, shortName, url, user) {
		const payload = {
			"name": name,
			"quarter": quarter,
			"short_name": shortName,
			"url": url,
			"user": user.id,
		}
		return api.post("/api/queue/create_course", payload)
	},
	autoOpenQueue(id, user_id, action_type) {
		const payload = {
			"queue_id": id,
			"user_id": user_id,
			"action_type": action_type 
		}
		return api.post("/api/queue/login_grader", payload)
	},
	autoCloseQueue(id, user_id, action_type) {
		const payload = {
			"queue_id": id,
			"user_id": user_id,
			"action_type": action_type 
		}
		return api.post("/api/queue/logout_id", payload)
	},
	findQueueforCourse(course_id) {
		const params = {course_id: course_id}
		return api.get("/api/queue/find_queue_for_course", {params: params})		
	},
	/* TICKET */
	addTicket(queue_id, student_id, title, 
				description, room, workstation, is_private,
				help_type, tag_list) {
		// TODO: title: what is title of a ticket?
		const payload = {
			"queue_id": queue_id,
			"student_id": student_id,
			"title": title,
			"description": description,
			"room": room,
			"workstation": workstation,
			"is_private": is_private,
			"help_type": help_type,
			"tag_list": tag_list
		}
		return api.post("api/ticket/add_ticket", payload)
	},
	getUserPermissions(user_id, ticket_id) {
		const payload = {
			"user_id": user_id,
			"ticket_id": ticket_id
		}
		return api.post("api/ticket/get_user_permissions", payload)
	},
	studentUpdateTicket(ticket_id, cancel, title, 
						description, room, workstation, help_type,
						is_private) {
		// TODO: this should be a put
		const payload = {
			"ticket_id": ticket_id,
			"cancel": cancel,
			"title": title,
			"description": description,
			"room": room,
			"workstation": workstation,
			"help_type": help_type,
			"is_private": is_private
		}
		return api.post("api/ticket/student_update", payload)
	},
	graderUpdateTicket(ticket_id, status) {
		// TODO: should this include which grader made an update
		const payload = {
			"ticket_id": ticket_id,
			"status": status
		}
		return api.post("api/ticket/grader_update", payload)
	},
	findAllTickets(queue_id) {
		//TODO: find all the tickets that are accepted or pending acceptance?
		console.log(queue_id);
	},
	submitTicketFeedback(ticket_id, rating, feedback, is_anonymous) {
		const payload = {
			"ticket_id": ticket_id,
			"rating": rating,
			"feedback": feedback,
			"is_anonymous": is_anonymous
		}
		return api.post("api/feedback_api/add_feedback", payload)
	},
	loginGrader(queue_id,user_id) {
        let payload = {
            "queue_id" : queue_id,
            "user_id" : user_id,
            "action_type" : "MANUAL"
		};
		return api.post("/api/queue/login_grader", payload)
	},
	logoutGrader(queue_id,user_id) {
        let payload = {
            "queue_id" : queue_id,
            "user_id" : user_id,
            "action_type" : "MANUAL"
		};
		return api.post("/api/queue/logout_grader",payload)
	},
	getActiveTutors(queue_id) {
		return api.get(`/api/enrolled_course/find_active_tutor_for?queue_id=${queue_id}`)
	}
	// TODO: comments on the ticket
}


export default server;
