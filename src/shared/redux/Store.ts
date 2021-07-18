import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { reducer as CounterReducer } from '../../features/counter/CounterRedux'
import watchRootSage from './RootSaga'

const combineReducer = combineReducers({
	counter: CounterReducer,
})

export type RootState = ReturnType<typeof combineReducer>

export default function buildStore(): Store {
	const sagaMiddleware = createSagaMiddleware()

	const store = configureStore({
		reducer: combineReducer,
		middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
	})

	sagaMiddleware.run(watchRootSage)
	return store
}
