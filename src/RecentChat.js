import React, { Component, } from 'react';
import { View, Text, Button} from 'react-native';
import {TabNavigator} from 'react-navigation'
import ChatScreen from './ChatScreen.js'

class RecentChat extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Text>List of Recent Messages</Text>
        <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Billy' })}
          title="Chat with Billy"
        />
      </View>
    )
  }
}

const ChatNavigator = TabNavigator({
  Recent: {screen: RecentChat},
  Chat: {screen: ChatScreen},
});

export default RecentChat;
