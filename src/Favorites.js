import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'
import { Header } from 'react-native-elements'

class Favorites extends React.Component {
  constructor(props : any) {
    super(props);
  }

  render() {
    let styles = this.props.styles;

    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: 'FAVORITES', style: { color: '#000' } }}/>
      </View>
    )
  }
}

export default Favorites;
