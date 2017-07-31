//Global React Native Imports
import React from 'react';
import { AppRegistry, Text, View, Button, Dimensions, FlatList,} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Imports
import ContactsView from './src/ContactsView.js';
import RecentChat from './src/RecentChat.js';

import MY_CONTACTS from './src/data/contacts.json';
import styles from './src/mincss/minspec.json';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello, Chat App!</Text>
      </View>
    );
  }
}

//Settings for Home Screen
HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Ionicons name={'ios-home-outline'} size={26} style={{ color: '#2980b9' }} />,
};


//Main Tab Navigation
const MainScreenNavigator =  TabNavigator({
  Home: {screen: HomeScreen },
  Recent: {
    screen: props => <RecentChat styles={styles} />,
    navigationOptions: {
      tabBarLabel: 'Recent',
      tabBarIcon: <Ionicons name={'ios-time-outline'} size={26} style={{color: '#2980b9'}}/>
    },
  },
  Contacts: {
      screen: props => <ContactsView data={MY_CONTACTS} styles={styles}/>,
       navigationOptions: {
        tabBarLabel: 'My Contacts',
        tabBarIcon: <Ionicons name={'ios-contact-outline'} size={26} style={{ color: '#2980b9' }} />,
       },
    },
});

MainScreenNavigator.navigationOptions = {
  title: 'MessengerLite',
};

//Main App Setup
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
