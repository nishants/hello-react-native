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
        <View style={styles.rowContainer}>
          <TextInput
              placeholder={"An Awesome Place"}
              style={styles.placeInput}
              value={this.state.placeName}
              onChangeText={this.updatePlace}/>
          <Button onPress={()=> {}} style={styles.button} title="ADD"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding       : 26,
    //flexDirection  : "column",
    backgroundColor: '#eee',
    alignItems     : 'center',
    justifyContent : "flex-start",
  },
  rowContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput:{
    width: "70%",
    backgroundColor: '#fff',
  },
  button: {
    color: "#fbfbfb",
    width: "30%",
  }

});
