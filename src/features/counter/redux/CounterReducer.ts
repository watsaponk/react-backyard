import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CounterState from './CounterState'

const initialState: CounterState = {
	value: 0,
	magicNumber: 0,
}

export const slice = createSlice({
	name: 'couter',
	initialState,
	reducers: {
		initialize: () => {
			// call in saga
		},
		initSuccess: (state, action: PayloadAction<number>) => {
			state.magicNumber = action.payload
		},
		increase: state => {
			state.value += 1
		},
		decrease: state => {
			state.value -= 1
		},
	},
})

export const { initialize, initSuccess, increase, decrease } = slice.actions

export const { actions } = slice

export default slice.reducer
