import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../../features/counter/redux/CounterReducer'

export const store = configureStore({
	reducer: {
		counter: CounterReducer,
	},
})

export type AppDispatch = typeof store.dispatch
