import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';

class SavedStories extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Text>Saved Stories</Text>
      </View>
    )
  }
}

export default SavedStories;
