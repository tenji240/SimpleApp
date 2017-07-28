import React, { Component, } from 'react';
import { View, Text, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ContactsView extends Component {
  
  static navigationOptions = {
    tabBarLabel: 'My Contacts',
    tabBarIcon: <Ionicons name={'ios-contact-outline'} size={26} style={{ color: '#2980b9' }} />,
  };
  
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