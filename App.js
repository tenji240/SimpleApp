//Global React Native Imports
import React from 'react';
import { AppRegistry, Text, View, Button, Dimensions, FlatList, Alert } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Imports
import SavedStories from './src/SavedStories.js';
import Favorites from './src/Favorites.js';
import Explore from './src/Explore.js';
import HomeScreen from './src/Home.js';

import styles from './src/mincss/minspec.json';

//Main Tab Navigation
const MainScreenNavigator = TabNavigator({
  Home: {
    screen: props => <HomeScreen styles={styles}/>,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: <Ionicons name={'ios-home-outline'} size={26} style={{ color: '#2980b9' }}/>
    }
  },
  Favorites: {
    screen: props => <Favorites styles={styles}/>,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: <Ionicons name={'ios-heart-outline'} size={26} style={{ color: '#2980b9' }}/>
    }
  },
  SavedStories: {
    screen: props => <SavedStories styles={styles}/>,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: <Ionicons name={'ios-bookmark-outline'} size={26} style={{ color: '#2980b9' }}/>
    }
  },
  Explore: {
    screen: props => <Explore styles={styles}/>,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: <Ionicons name={'ios-compass-outline'} size={26} style={{color: '#2980b9'}}/>
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'SimpleApp'
};

//Main App Setup
const SimpleApp = MainScreenNavigator;

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
