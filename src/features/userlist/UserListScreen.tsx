import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import SimpleLineSeparator from './component/SimpleLineSeparator'
import UserItem from './component/UserItem'
import User from './type/User'

export default function UserListScreen(): React.ReactElement {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	const data: User[] = [
		{
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
		},
		{
			id: 2,
			name: 'Ervin Howell',
			username: 'Antonette',
			email: 'Shanna@melissa.tv',
		},
	]

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
