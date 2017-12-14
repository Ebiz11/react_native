import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, ListView, StyleSheet, Text, View, Alert } from 'react-native';

export default class MemberActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handlePress(title, releaseYear) {
    Alert.alert('Title: '+title+' And Release Year: '+releaseYear);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {
            (rowData) => (
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress={() => this._handlePress(rowData.title, rowData.releaseYear)}>
                 <Text style = {styles.submitButtonText}> {rowData.title} </Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={[
  //           {key: 'Manchester United'},
  //           {key: 'Manchester CIty'},
  //           {key: 'Tottenham Hotspurs'},
  //           {key: 'Chelsea'},
  //           {key: 'Arsenal'},
  //           {key: 'Liverpool'},
  //           {key: 'Southampton'},
  //           {key: 'Stoke City'},
  //         ]}
  //         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
  //       />
  //     </View>
  //   );
  // }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
})
