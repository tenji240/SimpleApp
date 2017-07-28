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
      </View>
    )
  }
}

export default RecentChat;
