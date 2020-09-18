import api from './conf'

const server:any = {
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
	}
}

export default server;
