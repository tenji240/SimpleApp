import React, { Component, } from 'react';
import { View, Text} from 'react-native';

class HomeScreen extends React.Component {

  constructor(props : any) {
    super(props);
  }

  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to News</Text>
      </View>
    );
  }
}

export default HomeScreen;
