import { fetchUsers, fetchUsersSuccess, reducer, UserListState } from '../../../src/features/userlist/UserListRedux'
import User from '../../../src/features/userlist/types/User'

describe('Reducer', () => {
	test('When dispatch fetchUsers, isLoading should equal true', () => {
		const initialState: UserListState = {
			isLoading: false,
			data: [],
		}
		const expectedState: UserListState = {
			...initialState,
			isLoading: true,
		}

		const newState = reducer(initialState, fetchUsers())

		expect(newState).toEqual(expectedState)
	})

	test('When dispatch fetchUsersSuccess, data should be set', () => {
		const initialState: UserListState = {
			isLoading: true,
			data: [],
		}
		const user: User = {
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
		}
		const expectedState: UserListState = {
			isLoading: false,
			data: [user],
		}

		const newState = reducer(initialState, fetchUsersSuccess([user]))

		expect(newState).toEqual(expectedState)
	})
})
