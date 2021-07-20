import { fork, ForkEffect } from 'redux-saga/effects'
import equallySaga from '../../features/equally/EquallySaga'
import userListSaga from '../../features/userlist/UserListSaga'

export default function* watchRootSage(): Generator<ForkEffect> {
	yield fork(equallySaga)
	yield fork(userListSaga)
}
