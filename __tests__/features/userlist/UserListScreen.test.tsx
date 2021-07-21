import React from 'react'
import { render, RenderAPI, waitFor } from '@testing-library/react-native'
import { Store } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { mocked } from 'ts-jest/utils'
import UserListScreen from '../../../src/features/userlist/UserListScreen'
import GetUsers from '../../../src/features/userlist/sideeffects/GetUsers'
import buildStore from '../../../src/shared/redux/Store'
import { fetchUsers } from '../../../src/features/userlist/UserListRedux'

jest.mock('../../../src/features/userlist/sideeffects/GetUsers', () => {
	return jest.fn()
})

beforeEach(() => {
	mocked(GetUsers).mockClear()
})

const renderScreen = (store: Store): RenderAPI => {
	return render(
		<Provider store={store}>
			<UserListScreen />
		</Provider>
	)
}

test('When fetch user success with data should display item on list', async () => {
	mocked(GetUsers).mockImplementation(() => {
		return Promise.resolve([
			{
				id: 1,
				name: 'Leanne Graham',
				username: 'Bret',
				email: 'Sincere@april.biz',
			},
		])
	})
	const store = buildStore()
	const spyDispatch = jest.spyOn(store, 'dispatch')
	const { getByTestId, queryByTestId } = renderScreen(store)

	expect(queryByTestId('text_empty_handler')).toHaveTextContent(/^Loading...$/)

	await waitFor(() => {
		expect(queryByTestId('text_empty_handler')).toBeNull()
		expect(getByTestId('flat_list_users')).toBeEnabled()
		expect(getByTestId('item_user_1')).toBeEnabled()
		expect(GetUsers).toBeCalledTimes(1)
		expect(spyDispatch).toHaveBeenCalledWith(fetchUsers())
		spyDispatch.mockClear()
	})
})

test('When fetch user success with empty should display no result message', async () => {
	mocked(GetUsers).mockImplementation(() => {
		return Promise.resolve([])
	})
	const store = buildStore()
	const spyDispatch = jest.spyOn(store, 'dispatch')
	const { getByTestId, queryByTestId } = renderScreen(store)

	expect(getByTestId('text_empty_handler')).toHaveTextContent(/^Loading...$/)

	await waitFor(() => {
		expect(getByTestId('text_empty_handler')).toHaveTextContent(/^No Result$/)
		expect(getByTestId('flat_list_users')).toBeEnabled()
		expect(queryByTestId('item_user_1')).toBeNull()
		expect(GetUsers).toBeCalledTimes(1)
		expect(spyDispatch).toHaveBeenCalledWith(fetchUsers())
		spyDispatch.mockClear()
	})
})
