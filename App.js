import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {placeName: ''};
  updatePlace = (value)=> {
    this.setState({placeName: value})
  }
  confirmPlace = () => alert(this.state.placeName);
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder={"Awesome Places"}
            style={{width: 300}}
            value={this.state.placeName}
            onChangeText={this.updatePlace}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding        : 26,
    flexDirection  : "column",
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : "flex-start",
  },
  button: {
    color: "black",
    backgroundColor: '#eee',
  }
});
