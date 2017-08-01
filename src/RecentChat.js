import React, { Component, } from 'react';
import { View, Text, Button} from 'react-native';

class RecentChat extends React.Component {
  constructor(props: any) {
    super(props);
    this.goToChat = this.goToChat.bind(this);
  }

  goToChat(){
    return this.props.onNavDirect;
  }

  render() {
    let styles = this.props.styles;

    return (
      <View style={styles.container}>
        <Text>List of Recent Messages</Text>
        <Button onPress={this.goToChat} title="Chat it up!" />
      </View>
    )
  }
}

export default RecentChat;
