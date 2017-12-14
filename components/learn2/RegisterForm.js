import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      phone: '',
      username: '',
      password: '',
      confirmpassword: '',
    }
  }

    _register() {
      console.log('aaaaaaaaaaa');

        if(this.state.password == this.state.confirmpassword) 
          Alert.alert('Register Success');

        else
          Alert.alert('password and confirmation do not match');

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Full Name'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            onChangeText={(text) => this.setState({fullname: text})}
                            // value = {this.state.fullname}
                            />

               <TextInput style = {styles.input}
                          returnKeyType="go" ref={(input)=> this.passwordInput = input}
                          placeholder='Phone Number'
                          placeholderTextColor='rgba(225,225,225,0.7)'
                          onChangeText={(text) => this.setState({phone: text})}
                          // value = {this.state.phone}
                          />

                <TextInput style = {styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Username'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            onChangeText={(text) => this.setState({username: text})}
                            // value = {this.state.username}
                            />

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           placeholder='Password'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry
                           onChangeText={(text) => this.setState({password: text})}
                           // value = {this.state.password}
                           />

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           placeholder='Confirm Password'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry
                           onChangeText={(text) => this.setState({confirmpassword: text})}
                           // value = {this.state.confirmpassword}
                           />

              <TouchableOpacity style={styles.buttonContainer} onPress={() => this._register()}>
                    <Text  style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#e1e6df',
        paddingVertical: 15
    },
    buttonText:{
        color: '#df3b6b',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton:{
      backgroundColor:  '#e1e6df',
       color: '#fff'
    }

});
