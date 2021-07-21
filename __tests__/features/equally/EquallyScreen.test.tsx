import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react-native'
import { mocked } from 'ts-jest/utils'
import EquallyScreen from '../../../src/features/equally/EquallyScreen'
import buildStore from '../../../src/shared/redux/Store'
import { renderScreenWithStore, spyOnStoreDispatch } from '../../TestUtil'
import { initialize, updateValue } from '../../../src/features/equally/EquallyRedux'
import GetMagicNumber, { MagicNumber } from '../../../src/features/equally/sideeffects/GetMagicNumber'
import { navigate } from '../../../src/shared/AppNavigator'

jest.mock('../../../src/shared/AppNavigator')

jest.mock('../../../src/features/equally/sideeffects/GetMagicNumber', () => {
	return jest.fn()
})

afterEach(() => {
	mocked(GetMagicNumber).mockClear()
})

test('When start screen should get magic number', async () => {
	const magicNumber: MagicNumber = {
		goal: 2,
		value: 1,
	}
	mocked(GetMagicNumber).mockImplementation(() => {
		return Promise.resolve(magicNumber)
	})
	const store = buildStore()
	const spyDispatch = spyOnStoreDispatch(store)
	const { getByTestId, queryByTestId } = renderScreenWithStore(store, <EquallyScreen />)

	expect(queryByTestId('text_equally_loading_indicator')).toBeEnabled()

	await waitFor(() => {
		expect(queryByTestId('text_equally_loading_indicator')).toBeNull()
		expect(getByTestId('text_count')).toHaveTextContent(magicNumber.value.toString())
		expect(getByTestId('text_equally_goal')).toHaveTextContent(magicNumber.goal.toString())
		expect(spyDispatch).toHaveBeenCalledWith(initialize())
		expect(spyDispatch).toHaveBeenCalledWith(updateValue(magicNumber.value))
		spyDispatch.mockClear()
	})
})

test('When 2 number are equal navigate to EquallyWin', async () => {
	const magicNumber: MagicNumber = {
		goal: 2,
		value: 1,
	}
	mocked(GetMagicNumber).mockImplementation(() => {
		return Promise.resolve(magicNumber)
	})
	const store = buildStore()
	const spyDispatch = spyOnStoreDispatch(store)
	const { getByTestId } = renderScreenWithStore(store, <EquallyScreen />)

	await waitFor(() => {
		fireEvent.press(getByTestId('button_plus'))
	})

	await waitFor(() => {
		expect(navigate).toHaveBeenCalledWith('EquallyWin')
		expect(spyDispatch).toHaveBeenCalledWith(updateValue(magicNumber.value + 1))
		spyDispatch.mockClear()
	})
})
