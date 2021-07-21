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

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				testID='flat_list_users'
				data={data}
				keyExtractor={(item: User) => item.id.toString()}
				renderItem={info => <UserItem data={info.item} />}
				ItemSeparatorComponent={() => <SimpleLineSeparator />}
				ListEmptyComponent={() => {
					return (
						<Text testID='text_empty_handler' style={{ alignSelf: 'center', justifyContent: 'center' }}>
							{isLoading ? 'Loading...' : 'No Result'}
						</Text>
					)
				}}
			/>
		</View>
	)
}
