import { createSelector } from '@reduxjs/toolkit'
import RootState from '../../../shared/redux/RootState'
import CounterState from './CounterState'

const counterSelector = (state: RootState) => state.counter

const valueSelector = createSelector(counterSelector, (state: CounterState) => state.value)

export default valueSelector
