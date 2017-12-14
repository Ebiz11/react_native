import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ebiz',
      password: 'ebiz',
    }
  }

  _handlePress() {

    if(this.state.username == 'ebiz' && this.state.password == 'ebiz'){
      // Alert.alert('Login Success');
      this.props.navigation.navigate('Dashboard');

    }else {
      Alert.alert('Login Failed');
    }

  }

  render() {
    return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
      <Text></Text>
      <Text style = {styles.textLabel}>Login</Text>
      <Text></Text>
      <Text></Text>

      <Text style = {styles.textLabel}>Username: </Text>
      <TextInput
        style = {styles.input}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({username: text})}
        value={this.state.username}
        placeholder="Enter Username"
        underlineColorAndroid = "transparent"
      />

      <Text></Text>
      <Text></Text>

      <Text style = {styles.textLabel}>Password:</Text>
      <TextInput
        style = {styles.input}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.password}
        placeholder="Enter Password"
        secureTextEntry={true}
        underlineColorAndroid = "transparent"
      />

      <Text></Text>
      <Text></Text>

      <TouchableOpacity
         style = {styles.submitButton}
         onPress={() => this._handlePress()}>
         <Text style = {styles.submitButtonText}> Login </Text>
      </TouchableOpacity>
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
  input: {
   margin: 20,
   height: 40,
   borderColor: '#7a42f4',
   borderWidth: 1
  },
  textLabel: {
    margin: 20
  },
  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 40,
  },
  submitButtonText:{
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
  }
});
