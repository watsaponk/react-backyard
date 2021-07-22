/* eslint-disable jest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import userListSaga from '../../../src/features/userlist/UserListSaga'
import GetUsers from '../../../src/features/userlist/sideeffects/GetUsers'
import User from '../../../src/features/userlist/types/User'
import { fetchUsers, fetchUsersSuccess } from '../../../src/features/userlist/UserListRedux'

test('When receive fetchUser action - success', () => {
	const mockUsers: User[] = [
		{
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
		},
	]
	return expectSaga(userListSaga)
		.provide([[matchers.call.fn(GetUsers), mockUsers]])
		.put(fetchUsersSuccess(mockUsers))
		.dispatch(fetchUsers)
		.silentRun()
})
