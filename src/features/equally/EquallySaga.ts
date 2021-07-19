import { PayloadAction } from '@reduxjs/toolkit'
import { ForkEffect, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { goalSelector, initialize, initSuccess, updateValue, updateValueSuccess } from './EquallyRedux'
import GetMagicNumber, { MagicNumber } from './sideeffects/GetMagicNumber'

function* handleInitialize() {
	const maigcNuber: MagicNumber = yield GetMagicNumber()
	yield put(initSuccess(maigcNuber))
}

function* handleUpdateValueAction(action: PayloadAction<number>) {
	const goal: number = yield select(goalSelector)
	const updatedValue = action.payload
	yield put(
		updateValueSuccess({
			currentValue: updatedValue,
			isWin: updatedValue === goal,
		})
	)
}

export default function* equallySaga(): Generator<ForkEffect> {
	yield takeLatest(initialize.type, handleInitialize)
	yield takeEvery(updateValue.type, handleUpdateValueAction)
}
