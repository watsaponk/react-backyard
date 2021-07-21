import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../shared/redux/Store'
import User from './types/User'

export type UserListState = {
	isLoading: boolean
	data: User[]
}

const initialState: UserListState = {
	isLoading: true,
	data: [],
}

const slice = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		fetchUsers: (state: UserListState) => {
			state.isLoading = true
		},
		fetchUsersSuccess: (state: UserListState, action: PayloadAction<User[]>) => {
			state.isLoading = false
			state.data = action.payload
		},
	},
})

const userListStateSelector = (state: RootState) => state.userList

export const isLoadingSelector = createSelector(userListStateSelector, (state: UserListState) => state.isLoading)

export const dataSelector = createSelector(userListStateSelector, (state: UserListState) => state.data)

export const { fetchUsers, fetchUsersSuccess } = slice.actions

export const { reducer } = slice
