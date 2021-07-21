import { render, RenderAPI } from '@testing-library/react-native'
import { Dispatch, Store } from '@reduxjs/toolkit'
import React from 'react'
import * as redux from 'react-redux'
import SpyInstance = jest.SpyInstance

export function renderScreenWithStore(store: Store, screen: React.ReactElement): RenderAPI {
	return render(<redux.Provider store={store}>{screen}</redux.Provider>)
}

export function spyOnStoreDispatch(store: Store): SpyInstance {
	return jest.spyOn(store, 'dispatch')
}

export function createSpyUseDispatch(mockDispatch: Dispatch): SpyInstance {
	const spy = jest.spyOn(redux, 'useDispatch')
	spy.mockReturnValue(mockDispatch)
	return spy
}
