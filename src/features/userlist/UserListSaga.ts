import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import GetUsers from './sideeffects/GetUsers'
import { fetchUsers, fetchUsersSuccess } from './UserListRedux'

function* handleFetchUsers() {
	const response = yield call(GetUsers)
	yield put(fetchUsersSuccess(response))
}

export default function* userListSaga(): Generator<ForkEffect> {
	yield takeLatest(fetchUsers.type, handleFetchUsers)
}
