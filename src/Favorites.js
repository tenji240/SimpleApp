import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'

class Favorites extends React.Component {
  constructor(props : any) {
    super(props);
  }

  render() {
    let styles = this.props.styles;

    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    )
  }
}

export default Favorites;
