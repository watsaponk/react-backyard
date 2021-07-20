import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function SimpleLineSeparator(): React.ReactElement {
	return <View style={styles.line} />
}

const styles = StyleSheet.create({
	line: {
		height: 1,
		backgroundColor: 'grey',
	},
})
