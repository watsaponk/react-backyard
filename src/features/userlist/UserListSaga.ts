import { ForkEffect, put, takeLatest } from 'redux-saga/effects'
import GetUsers from './sideeffects/GetUsers'
import User from './types/User'
import { fetchUsers, fetchUsersSuccess } from './UserListRedux'

function* handleFetchUsers() {
	const response: User[] = yield GetUsers()
	yield put(fetchUsersSuccess(response))
}

export default function* userListSaga(): Generator<ForkEffect> {
	yield takeLatest(fetchUsers.type, handleFetchUsers)
}
