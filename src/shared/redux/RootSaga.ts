import { fork, ForkEffect } from 'redux-saga/effects'
import counterSaga from '../../features/counter/redux/CounterSaga'

export default function* watchRootSage(): Generator<ForkEffect> {
	yield fork(counterSaga)
}
