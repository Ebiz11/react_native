import React, { Component } from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lustria Ebis',
      address: 'Turi, Sleman, Yogyakarta'
    };
  }

  onPressLearnMore() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <ScrollView>
      <Text></Text>
      <Text>Profile Screen.</Text>
      <Text></Text>
      <Text></Text>
      <Image source={require('../assets/images/eunsol.jpg')} />
      <Text></Text>
      <Text></Text>
      <Button
        onPress={this.onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text></Text>

      <Text>Name: {this.state.name}</Text>
      <Text>Address: {this.state.address}</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>Name: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}

      />

      <Text>Address:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(address) => this.setState({address})}

      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      </ScrollView>

      // <View
      //
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
