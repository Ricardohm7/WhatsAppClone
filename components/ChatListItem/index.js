import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'}}
       style={styles.image}
        />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>Lukas</Text>
          <Text style={styles.subTitie}>11:11 AM</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitie}>Hello, how are you doing?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgrey',
    },
  row: {
    flexDirection: 'row',
    marginBottom: 3,
    // justifyContent: 'space-between'
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitie: {
    color: 'grey',
    fontSize: 14,
  }
})

export default ChatListItem