import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  _handlePress() {

    if(this.state.username == 'ebiz' && this.state.password == 'ebiz'){
      Alert.alert('Login Success');
    }else {
      Alert.alert('Login Failed');
    }

}

  render() {
    return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
      <Text></Text>
      <Text>Login</Text>
      <Text></Text>
      <Text></Text>

      <Text>Username: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({username: text})}
        placeholder="Enter Username"
      />

      <Text></Text>
      <Text></Text>

      <Text>Password:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({password: text})}
        placeholder="Enter Password"
      />

      <Text></Text>
      <Text></Text>

      <Button
        onPress={() => this._handlePress()}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    </ScrollView>
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
