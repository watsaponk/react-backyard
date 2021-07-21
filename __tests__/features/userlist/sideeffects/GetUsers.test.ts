import axios from 'axios'
import { mocked } from 'ts-jest/utils'
import GetUsers from '../../../../src/features/userlist/sideeffects/GetUsers'
import User from '../../../../src/features/userlist/types/User'

jest.mock('axios')

afterEach(() => {
	mocked(axios.get).mockClear()
})

test('When fetch users success', () => {
	const user: User = {
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
	}
	mocked(axios.get).mockImplementationOnce(() => {
		return Promise.resolve({
			data: [user],
		})
	})

	return expect(GetUsers()).resolves.toEqual([user])
})

test('When fetch users failure', () => {
	const error: Error = {
		name: 'name',
		message: 'message',
	}
	mocked(axios.get).mockImplementationOnce(() => {
		return Promise.reject(error)
	})

	return expect(GetUsers()).rejects.toEqual(error)
})
