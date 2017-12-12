import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  onPressLearnMore() {
    Alert.alert("Login Success!")
  }

  render() {

    return (

      <View style={styles.container}>

      <Button
        onPress={this.onPressLearnMore}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
