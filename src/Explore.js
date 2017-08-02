import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';

class Explore extends Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Text>Explore</Text>
      </View>
    )
  }
}

export default Explore