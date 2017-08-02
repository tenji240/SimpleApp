import React, { Component, } from 'react';
import { View, Text} from 'react-native';
import { Header } from 'react-native-elements';

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
        <Header centerComponent={{ text: 'HOME', style: { color: '#000' } }}/>
      </View>
    );
  }
}

export default HomeScreen;
