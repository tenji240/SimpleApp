//Global React Native Imports
import GiftedMessenger from 'react-native-gifted-messenger'
import React from 'react';
import { AppRegistry, Text, View, Button, Dimensions, FlatList,} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Imports
import ContactsView  from './src/ContactsView.js';
import MY_CONTACTS from './src/data/contacts.json';
import styles from './src/mincss/minspec.json';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of Recent Chats</Text>
        <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"/>
      </View>
    );
  }
}

//Settings for Recent Chat
RecentChatsScreen.navigationOptions = {
  tabBarLabel: 'Recent',
  tabBarIcon: <Ionicons name={'ios-time-outline'} size={26} style={{color: '#2980b9'}}/>
};

// New Contacts Setup
ContactsView.navigationOptions = {
  tabBarLabel: 'My Contacts',
  tabBarIcon: <Ionicons name={'ios-contact-outline'} size={26} style={{ color: '#2980b9' }} />,
};

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
  Recent: {screen: RecentChatsScreen}, 
  All: {screen: ContactsView },
});

MainScreenNavigator.navigationOptions = {
  title: 'SimpleApp',
};

//Temp Chat Screen Component
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} =  navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chatting with ${state.params.user}`,
      headerRight: (
        <Button title={ isInfo ? 'Done' : `${user}'s Info` }
          onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}/>
      ),
    };
  };
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
        }}>
        <GiftedMessenger
          ref={(c) => this._GiftedMessenger = c}
          styles={{
            container: {
              width: Dimensions.get('window').width,
            },
            bubbleRight: {
              marginLeft: 70,
              backgroundColor: "#007aff",
            },
          }}
          autoFocus={false}
          messages={[
            {
              text: 'Are you building a chat app?',
              name: 'React-Bot',
              image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
              position: 'left',
              date: new Date(2016, 3, 14, 13, 0),
              uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
            },
            {
              text: "Yes, and I use Gifted Messenger!",
              name: 'Awesome Developer',
              image: null,
              position: 'right',
              date: new Date(2016, 3, 14, 13, 1),
              uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
            },
          ]}
          handleSend={() => {}} //push message to json stack trace or locally save it
          onErrorButtonPress={() => {}}
          maxHeight={Dimensions.get('window').height - 20}
      
          loadEarlierMessagesButton={false}
          onLoadEarlierMessages={() => {}}
      
          senderName="Becky"
          senderImage={null}
          onImagePress={() => {}}
          displayNames={true
          }
    
          parseText={true}
          handlePhonePress={() => {}}
          handleUrlPress={() => {}}
          handleEmailPress={() => {}}
      
          isLoadingEarlierMessages={false}
      
          typingMessage={"typing..."}
        />
      </View>
    );
  }
}

//Main App Setup
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
