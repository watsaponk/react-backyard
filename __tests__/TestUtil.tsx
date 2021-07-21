import { render, RenderAPI } from '@testing-library/react-native'
import { Store } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import SpyInstance = jest.SpyInstance

export function renderScreenWithStore(store: Store, screen: React.ReactElement): RenderAPI {
	return render(<Provider store={store}>{screen}</Provider>)
}

export function spyOnStoreDispatch(store: Store): SpyInstance {
	return jest.spyOn(store, 'dispatch')
}
