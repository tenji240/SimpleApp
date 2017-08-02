import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';
import { Header } from 'react-native-elements';

class SavedStories extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    let styles =  this.props.styles;
    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: 'MY STORIES', style: { color: '#000' } }}/>
      </View>
    )
  }
}

export default SavedStories;
