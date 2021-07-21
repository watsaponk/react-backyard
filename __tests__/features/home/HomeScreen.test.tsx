import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import HomeScreen from '../../../src/features/home/HomeScreen'
import { navigate } from '../../../src/shared/AppNavigator'

jest.mock('../../../src/shared/AppNavigator', () => ({
	navigate: jest.fn(),
}))

test('When press Counter should navigate to Counter feature', () => {
	const { getByTestId } = render(<HomeScreen />)
	const menuCounter = getByTestId('menu_counter')

	fireEvent.press(menuCounter)

	expect(navigate).toHaveBeenCalledWith('Counter')
})

test('When press Equally should navigate to Equally feature', () => {
	const { getByTestId } = render(<HomeScreen />)
	const menuCounter = getByTestId('menu_equally')

	fireEvent.press(menuCounter)

	expect(navigate).toHaveBeenCalledWith('Equally')
})

test('When press User List should navigate to User List feature', () => {
	const { getByTestId } = render(<HomeScreen />)
	const menuCounter = getByTestId('menu_user_list')

	fireEvent.press(menuCounter)

	expect(navigate).toHaveBeenCalledWith('UserList')
})
