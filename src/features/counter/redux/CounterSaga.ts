import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import GetMagicNumber from '../../service/GetMagicNumber'
import { initialize, initSuccess } from './CounterReducer'

function* handleInitialize() {
	const response: number = yield call(GetMagicNumber)
	yield put(initSuccess(response))
}

export default function* counterSaga(): Generator<ForkEffect> {
	yield takeLatest(initialize.type, handleInitialize)
}
