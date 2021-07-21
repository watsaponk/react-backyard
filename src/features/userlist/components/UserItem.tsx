import React from 'react'
import { Text, View } from 'react-native'
import User from '../types/User'

type UserItemProps = {
	data: User
}

export default function UserItem(props: UserItemProps): React.ReactElement {
	const { data } = props
	const { id, name, username, email } = data
	return (
		<View testID={`item_user_${id}`} style={{ flexDirection: 'column', padding: 8, backgroundColor: 'white' }}>
			<Text>ID : {id}</Text>
			<Text>NAME : {name}</Text>
			<Text>USERNAME : {username}</Text>
			<Text>EMAIL : {email}</Text>
		</View>
	)
}
