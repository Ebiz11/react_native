import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator} from 'react-navigation';


// You can import from local files
import Profile from './components/Profile';
import Home from './components/Home';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Home/>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Profile/>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});

export default RootTabs;
