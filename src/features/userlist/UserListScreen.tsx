import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import SimpleLineSeparator from './components/SimpleLineSeparator'
import UserItem from './components/UserItem'
import User from './types/User'
import { dataSelector, fetchUsers, isLoadingSelector } from './UserListRedux'

export default function UserListScreen(): React.ReactElement {
	const isLoading = useSelector(isLoadingSelector)
	const data = useSelector(dataSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text style={{ alignSelf: 'center' }}>Loading...</Text>
			</View>
		)
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data}
				keyExtractor={(item: User) => item.id.toString()}
				renderItem={info => <UserItem data={info.item} />}
				ItemSeparatorComponent={() => <SimpleLineSeparator />}
			/>
		</View>
	)
}
