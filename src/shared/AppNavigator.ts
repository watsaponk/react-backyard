import { NavigationContainerRef, ParamListBase, StackActions } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef()

export function navigate(screen: string, params?: ParamListBase): void {
	navigationRef.current?.navigate(screen, params)
}

export function goBack(): void {
	navigationRef.current?.goBack()
}

export function popToTop(): void {
	navigationRef.current?.dispatch(StackActions.popToTop())
}

export function push(screen: string, params?: ParamListBase): void {
	navigationRef.current?.dispatch(StackActions.push(screen, params))
}
