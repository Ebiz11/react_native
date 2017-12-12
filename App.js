import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Text>Haloo ini adalah home page.</Text>
    <Text></Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Text></Text>
    <Text>Halo ini adalah halaman detail.</Text>
    <Text>Lustria Ebiz</Text>
    <Text>Turi, Sleman, Yogyakarta</Text>
    <Text>Yeah!!</Text>
    <Text></Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home"
    />
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
