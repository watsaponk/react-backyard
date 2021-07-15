import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import CounterReducer from '../../features/counter/redux/CounterReducer'
import watchRootSage from './RootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: combineReducers({
		counter: CounterReducer,
	}),
	middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(watchRootSage)

export type AppDispatch = typeof store.dispatch
