import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { TabNavigator} from 'react-navigation';


// You can import from local files
import Profile from './components/Profile';
import Home from './components/Home';
import FlatListBasics from './components/FlatListBasics';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Home/>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Profile/>
  </View>
);

const ListScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <FlatListBasics/>
  </View>
)

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  List: {
    screen: ListScreen,
  }
});

export default RootTabs;
