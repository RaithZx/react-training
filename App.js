import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  onPressButton(){
    Alert.alert("You tapped the button!")
  }  
  render() {
    return (
      <Text>It Works!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems:"center"
  },
  containerBtnArriba: {
    margin:20
  },
  btnContainer:{
    marginTop:30
  },
  altContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
