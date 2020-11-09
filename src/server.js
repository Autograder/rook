import api from './conf'

const server = {
	getUser(id) {
		const params = {id: id}
		return api.get('/api/users/get', {params: params})
	},
	checkPassword(email, password) {
		const payload = {
			"email": email,
			"password": password
		}
		return api.post('/api/users/check_password', payload)
	},
	updateUser(id, fname) {
		const payload = {
			"id": id,
			"fname": fname,
		}
		return api.put('/api/users/update_user', payload)
	},
	resetPassword(id, newPassword, currPassword) {
		const payload = {
			"id": id,
			"password": newPassword,
			"old_password": currPassword
		}
		return api.put('/api/users/reset_password', payload)
	},
	forgotPassword(email) {
		const payload = {
			"email": email
		}
		return api.put('/api/users/forgot_password', payload)
	}
}

export default server;
