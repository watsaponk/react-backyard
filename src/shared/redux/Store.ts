import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import CounterReducer from '../../features/counter/redux/CounterReducer'
import watchRootSage from './RootSaga'

export default function buildStore(): Store {
	const sagaMiddleware = createSagaMiddleware()

	const store = configureStore({
		reducer: combineReducers({
			counter: CounterReducer,
		}),
		middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
	})

	sagaMiddleware.run(watchRootSage)
	return store
}
