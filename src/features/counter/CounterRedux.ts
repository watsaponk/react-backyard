import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../shared/redux/Store'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const slice = createSlice({
	name: 'couter',
	initialState,
	reducers: {
		increase: state => {
			state.value += 1
		},
		decrease: state => {
			state.value -= 1
		},
	},
})

const counterStateSelector = (state: RootState) => state.counter

export const valueSelector = createSelector(counterStateSelector, (state: CounterState) => state.value)

export const { increase, decrease } = slice.actions

export const { reducer } = slice
