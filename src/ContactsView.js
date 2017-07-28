import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';

class ContactsView extends Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    let contacts =  this.props.data;
    return (
      <View>
        <Text>Contact List</Text>
        <FlatList
          data={contacts}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default ContactsView;