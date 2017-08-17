import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://instagram.fsin1-1.fna.fbcdn.net/t51.2885-15/e35/15625222_1297217123678135_6944271839078121472_n.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 320, height: 320}}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
