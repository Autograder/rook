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
	updateUser(id: any, fname: string, password: string) {
		const payload: object = {
			"id": id,
			"fname": fname,
			"password": password
		}
		return api.post('/api/users/update_user', payload)
	}
}

export default server;
