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
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Text>Welcome to News</Text>
      </View>
    );
  }
}

export default HomeScreen;
