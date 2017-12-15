import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

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
import Dashboard from './components/learn2/Dashboard';
import MemberList from './components/learn2/MemberList';
import Drawer from './components/learn2/Drawer';

const HomeScreen = ({navigation} ) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Home navigation = { navigation }/>
  </View>
);

const LoginScreen = ({navigation}) => (
    <Login navigation = {navigation}/>
);

const RegisterScreen = ({navigation}) => (
    <Register navigation = {navigation}/>
);

const DrawerScreen = ({navigation}) => (
    <Drawer/>
);

const DashboardScreen = ({navigation}) => (
    <Dashboard navigation = {navigation}/>
);

const MemberListScreen = ({navigation}) => (
  <MemberList/>
);

const RootNavigator = StackNavigator({

  Index : {
    screen: HomeScreen,
  },

  Home: {
    screen: HomeScreen
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },

  Drawer: {
    screen: DrawerScreen
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: 'Create an Account',
    },
  },

  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      headerTitle: 'Dashboard',
      headerLeft: null
    },
  },

  Member: {
    screen: MemberListScreen,
    navigationOptions: {
      headerTitle: 'Member List'
    },
  },

},
{
  initialRouteName: 'Index',
  headerMode: 'none',
});

export default RootNavigator;
