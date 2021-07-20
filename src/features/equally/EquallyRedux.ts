import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../shared/redux/Store'
import { MagicNumber } from './sideeffects/GetMagicNumber'

export interface EquallyState {
	startValue: number
	goal: number
	currentValue: number
	isLoading: boolean
}

const initialState: EquallyState = {
	startValue: 0,
	goal: 0,
	currentValue: 0,
	isLoading: true,
}

const slice = createSlice({
	name: 'equally',
	initialState,
	reducers: {
		initialize: (state: EquallyState) => {
			state.isLoading = true
		},
		initSuccess: (state: EquallyState, action: PayloadAction<MagicNumber>) => {
			state.startValue = action.payload.value
			state.goal = action.payload.goal
			state.isLoading = false
		},
		updateValue: (_state: EquallyState, _action: PayloadAction<number>) => {
			//
		},
		updateValueSuccess: (state: EquallyState, action: PayloadAction<number>) => {
			state.currentValue = action.payload
		},
	},
})

const equallyStateSelector = (state: RootState) => state.equally

export const startValueSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.startValue)

export const goalSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.goal)

export const isLoadingSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.isLoading)

export const { initialize, initSuccess, updateValue, updateValueSuccess } = slice.actions

export const { reducer } = slice
