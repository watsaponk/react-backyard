import { fork, ForkEffect } from 'redux-saga/effects'
import equallySaga from '../../features/equally/EquallySaga'

export default function* watchRootSage(): Generator<ForkEffect> {
	yield fork(equallySaga)
}
