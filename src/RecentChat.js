import React, { Component, } from 'react';
import { View, Text, Button} from 'react-native';

class RecentChat extends Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Text>List of Recent Chats</Text>
        <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} title="Chat with Lucy"/> 
      </View>
    )
  }
}

export default RecentChat;