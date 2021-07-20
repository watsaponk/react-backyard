import axios from 'axios'
import User from '../types/User'

export default function GetUsers(): Promise<User[]> {
	return new Promise((resolve, reject) => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => resolve(response.data))
			.catch(error => reject(error))
	})
}
