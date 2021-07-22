/* eslint-disable jest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { select } from 'redux-saga/effects'
import equallySaga from '../../../src/features/equally/EquallySaga'
import GetMagicNumber, { MagicNumber } from '../../../src/features/equally/sideeffects/GetMagicNumber'
import {
	goalSelector,
	initialize,
	initSuccess,
	updateValue,
	updateValueSuccess,
} from '../../../src/features/equally/EquallyRedux'
import { navigate } from '../../../src/shared/AppNavigator'

jest.mock('../../../src/shared/AppNavigator')

describe('initialize action', () => {
	test('When generate magic number success', () => {
		const mockMagicNumber: MagicNumber = {
			goal: 1,
			value: 0,
		}
		return expectSaga(equallySaga)
			.provide([[matchers.call.fn(GetMagicNumber), mockMagicNumber]])
			.put(initSuccess(mockMagicNumber))
			.dispatch(initialize())
			.silentRun()
	})
})

describe('updateValue action', () => {
	test('When compare value with goal but not win', () => {
		const mockUpdateValue = 1
		return expectSaga(equallySaga)
			.provide([[select(goalSelector), 0]])
			.put(updateValueSuccess(mockUpdateValue))
			.not.call(navigate, 'EquallyWin')
			.dispatch(updateValue(mockUpdateValue))
			.silentRun()
	})

	test('When compare value with goal and win, should navigate to EquallyWin', () => {
		const mockUpdateValue = 0
		return expectSaga(equallySaga)
			.provide([[select(goalSelector), 0]])
			.put(updateValueSuccess(mockUpdateValue))
			.call(navigate, 'EquallyWin')
			.dispatch(updateValue(mockUpdateValue))
			.silentRun()
	})
})
