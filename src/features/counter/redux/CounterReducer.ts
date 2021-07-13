import { createSlice } from '@reduxjs/toolkit'

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

export const { increase, decrease } = slice.actions

export default slice.reducer