import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';

class ContactsView extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    let contacts =  this.prop.contacts;
    let styles = this.props.styles;
    return (
      <View style={styles.container}>
        <Text>Contact List</Text>
        <FlatList
          data={MY_CONTACTS}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default ContactsView;