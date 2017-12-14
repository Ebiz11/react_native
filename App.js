import React from 'react';
import { View, Text, Button, Image, AppRegistry } from 'react-native';

/* Learn 1 */
// // You can import from local files
// import { TabNavigator } from 'react-navigation';

// import Profile from './components/learn1/Profile';
// import Home from './components/learn1/Home';
// import FlatListBasics from './components/learn1/FlatListBasics';
//
// const HomeScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Home/>
//   </View>
// );
//
// const ProfileScreen = () => (
//   <View>
//     <Profile/>
//   </View>
// );
//
// const ListScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <FlatListBasics/>
//   </View>
// )
//
// const RootTabs = TabNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
//   List: { screen: ListScreen }
// });
//
// export default RootTabs;

/* Learn 2 */
import { StackNavigator } from 'react-navigation';

import Home from './components/learn2/Home';
import Login from './components/learn2/Login';
import Register from './components/learn2/Register';

const HomeScreen = ({navigation} ) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Home navigation = { navigation }/>
  </View>
);

const LoginScreen = (navigation) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Login/>
  </View>
);

const RegisterScreen = (navigation) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Register/>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Ebiz App',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: 'Create an Account',
    },
  },
});

export default RootNavigator;
