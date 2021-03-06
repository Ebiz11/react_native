import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class LoginForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: 'ebiz',
        password: 'ebiz',
      }
    }

    _login() {

      if(this.state.username == 'ebiz' && this.state.password == 'ebiz')
        this.props.navigation.navigate('Drawer');

      else
        Alert.alert('Login Failed');


        // return fetch('https://api.squline.com/agent/login', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     agent_code: 'agent_code',
        //     agent_password: 'agent_password',
        //   }),
        // })
        // .then((res) => res.json())
        // .then((resJSON) => {
        //   Alert.alert(resJSON.msg);
        //  })
        // .catch((err) => { console.log(err); });
    }

    componentDidMount() {
      // return fetch('https://facebook.github.io/react-native/movies.json')
      //   .then((response) => response.json())
      //   .then((responseJson) => {
      //     Alert.alert(responseJson.title)
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
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
                            placeholder='Username'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            underlineColorAndroid = "transparent"
                            onChangeText={(text) => this.setState({username: text})}
                            value = {this.state.username}
                            />

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           placeholder='Password'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry
                           underlineColorAndroid = "transparent"
                           onChangeText={(text) => this.setState({password: text})}
                           value = {this.state.password}
                           />

              <TouchableOpacity style={styles.buttonContainer} onPress={() => this._login()}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
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
