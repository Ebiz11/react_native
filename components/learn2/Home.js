import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Ebiz App</Text>
        <Text></Text>
        <Button
          onPress={(navigate) => this.props.navigation.navigate('Login')}
          title="Login"
        />
        <Text></Text>
        <Button
          onPress={(navigate) => this.props.navigation.navigate('Register')}
          title="Register"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
