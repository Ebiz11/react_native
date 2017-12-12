import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator} from 'react-navigation';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Home Screen</Text>
  <Text>Haloo ini adalah home page.</Text> 
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Profile Screen</Text>
  <Text></Text>
  <Text>Halo ini adalah halaman detail.</Text>
  <Text>Lustria Ebiz</Text>
  <Text>Turi, Sleman, Yogyakarta</Text>
  <Text>Yeah!!</Text>
  <Text></Text>
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
