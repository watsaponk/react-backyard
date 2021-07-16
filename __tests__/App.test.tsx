import { render } from '@testing-library/react-native'
import React from 'react'
import App from '../src/App'
import CounterScreen from '../src/features/counter/CounterScreen'

jest.mock('../src/features/counter/CounterScreen', () =>
	jest.fn().mockImplementation(() => {
		return <></>
	})
)

test('Render correctly', () => {
	render(<App />)
	expect(CounterScreen).toHaveBeenCalled()
})
