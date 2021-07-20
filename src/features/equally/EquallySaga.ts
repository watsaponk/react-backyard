import { PayloadAction } from '@reduxjs/toolkit'
import { ForkEffect, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { navigate } from '../../shared/AppNavigator'
import { goalSelector, initialize, initSuccess, updateValue, updateValueSuccess } from './EquallyRedux'
import GetMagicNumber, { MagicNumber } from './sideeffects/GetMagicNumber'

function* handleInitialize() {
	const maigcNuber: MagicNumber = yield GetMagicNumber()
	yield put(initSuccess(maigcNuber))
}

function* handleUpdateValueAction(action: PayloadAction<number>) {
	const goal: number = yield select(goalSelector)
	const updatedValue = action.payload
	const isWin = updatedValue === goal
	yield put(updateValueSuccess(updatedValue))
	if (isWin) {
		navigate('EquallyWin')
	}
}

export default function* equallySaga(): Generator<ForkEffect> {
	yield takeLatest(initialize.type, handleInitialize)
	yield takeEvery(updateValue.type, handleUpdateValueAction)
}
