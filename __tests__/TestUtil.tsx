import { render, RenderAPI } from '@testing-library/react-native'
import { Store } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'

export default function renderScreenWithStore(store: Store, screen: React.ReactElement): RenderAPI {
	return render(<Provider store={store}>{screen}</Provider>)
}
