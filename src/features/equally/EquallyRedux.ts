import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../shared/redux/Store'
import { MagicNumber } from './sideeffects/GetMagicNumber'

export interface EquallyState {
	startValue: number
	goal: number
	currentValue: number
	isWin: boolean
	isLoading: boolean
}

export interface UpdateValuePayload {
	currentValue: number
	isWin: boolean
}

const initialState: EquallyState = {
	startValue: 0,
	goal: 0,
	currentValue: 0,
	isWin: false,
	isLoading: true,
}

const slice = createSlice({
	name: 'equally',
	initialState,
	reducers: {
		initialize: () => {
			//
		},
		initSuccess: (state: EquallyState, action: PayloadAction<MagicNumber>) => {
			state.startValue = action.payload.value
			state.goal = action.payload.goal
			state.isLoading = false
		},
		updateValue: (_state: EquallyState, _action: PayloadAction<number>) => {
			//
		},
		updateValueSuccess: (state: EquallyState, action: PayloadAction<UpdateValuePayload>) => {
			state.currentValue = action.payload.currentValue
			state.isWin = action.payload.isWin
		},
	},
})

const equallyStateSelector = (state: RootState) => state.equally

export const startValueSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.startValue)

export const goalSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.goal)

export const isWinSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.isWin)

export const isLoadingSelector = createSelector(equallyStateSelector, (state: EquallyState) => state.isLoading)

export const { initialize, initSuccess, updateValue, updateValueSuccess } = slice.actions

export const { reducer } = slice
