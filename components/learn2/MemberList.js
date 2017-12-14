import React from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, ListView, StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MemberActive from './MemberActive';

const ActiveScreen = () => (
    <MemberActive/>
);

const PasiveScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Data Not Found</Text>
  </View>
);

const AllScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Data Not Found</Text>
  </View>
)

const RootTabs = TabNavigator({
  Active: { screen: ActiveScreen },
  Pasive: { screen: PasiveScreen },
  All: { screen: AllScreen }
});

export default RootTabs;
