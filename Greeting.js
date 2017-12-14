
// export default class App extends React.Component {
//   onPressLearnMore() {
//     Alert.alert("Login Success!")
//   }
//
//   render() {
//
//     return (
//
//       <View style={styles.container}>
//
//       <Button
//         onPress={this.onPressLearnMore}
//         title="Login Ah"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//       </View>
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

/* LoginScreen */

// import React, { Component } from 'react';
// import { Text, TouchableOpacity, View, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';
//
// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: 'ebiz',
//       password: 'ebiz',
//     }
//   }
//
//   _handlePress() {
//
//     if(this.state.username == 'ebiz' && this.state.password == 'ebiz'){
//       // Alert.alert('Login Success');
//       this.props.navigation.navigate('Dashboard');
//
//     }else {
//       Alert.alert('Login Failed');
//     }
//
//   }
//
//   render() {
//     return (
//     <ScrollView style={styles.content}>
//       <View style={styles.container}>
//       <Text></Text>
//       <Text style = {styles.textLabel}>Login</Text>
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Username: </Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({username: text})}
//         value={this.state.username}
//         placeholder="Enter Username"
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Password:</Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({password: text})}
//         value={this.state.password}
//         placeholder="Enter Password"
//         secureTextEntry={true}
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <TouchableOpacity
//          style = {styles.submitButton}
//          onPress={() => this._handlePress()}>
//          <Text style = {styles.submitButtonText}> Login </Text>
//       </TouchableOpacity>
//       </View>
//     </ScrollView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
//   input: {
//    margin: 20,
//    height: 40,
//    borderColor: '#7a42f4',
//    borderWidth: 1
//   },
//   textLabel: {
//     margin: 20
//   },
//   submitButton: {
//    backgroundColor: '#7a42f4',
//    padding: 10,
//    margin: 15,
//    height: 40,
//   },
//   submitButtonText:{
//     color: 'white',
//     fontWeight: "bold",
//     textAlign: 'center',
//   }
// });

/* register */
// import React, { Component } from 'react';
// import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
//
// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: 'Lustria Ebiz',
//       phone: '01628883',
//       username: 'ebiz',
//       password: 'ebiz',
//       confirmpassword: 'ebiz1',
//     }
//   }
//
//   _registerAccount(){
//     fetch('https://mywebsite.com/endpoint/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstParam: 'yourValue',
//         secondParam: 'yourOtherValue',
//       }),
//     });
//   }
//
//   _handlePress() {
//
//     if(this.state.password == this.state.confirmpassword){
//       Alert.alert('Register Success');
//     }else {
//       Alert.alert('password and confirmation do not match');
//     }
//
//   }
//
//   render() {
//     return (
//       <View>
//       <Text></Text>
//       <Text style = {styles.textLabel}>Register Form</Text>
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Fullname: </Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({fullname: text})}
//         value = {this.state.fullname}
//         placeholder="Enter fullname"
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Phone: </Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({phone: text})}
//         value = {this.state.phone}
//         placeholder="Enter phone number"
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Username: </Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({username: text})}
//         value = {this.state.username}
//         placeholder="Enter Username"
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Password:</Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({password: text})}
//         value = {this.state.password}
//         placeholder="Enter Password"
//         secureTextEntry={true}
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <Text style = {styles.textLabel}>Confirm Password:</Text>
//       <TextInput
//         style = {styles.input}
//         returnKeyLabel = {"next"}
//         onChangeText={(text) => this.setState({confirmpassword: text})}
//         value = {this.state.confirmpassword}
//         placeholder="Enter Confirm Password"
//         secureTextEntry={true}
//         underlineColorAndroid = "transparent"
//       />
//
//       <Text></Text>
//       <Text></Text>
//
//       <TouchableOpacity
//          style = {styles.submitButton}
//          onPress={() => this._handlePress()}>
//          <Text style = {styles.submitButtonText}> Submit </Text>
//       </TouchableOpacity>
//
//       <Text></Text>
//       <Text></Text>
//       <Text></Text>
//       <Text></Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#2c3e50',
//     },
//     loginContainer:{
//         alignItems: 'center',
//         flexGrow: 1,
//         justifyContent: 'center'
//     },
//     logo: {
//         position: 'absolute',
//         width: 300,
//         height: 100
//     },
//     title:{
//         color: "#FFF",
//         marginTop: 120,
//         width: 180,
//         textAlign: 'center',
//         opacity: 0.9
//     }
// });
