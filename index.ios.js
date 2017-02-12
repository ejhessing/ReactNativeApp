/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDn9NHeZoPISI03VQkEPlwIEtrm0co5Obc",
    authDomain: "todolist-80768.firebaseapp.com",
    databaseURL: "https://todolist-80768.firebaseio.com",
    storageBucket: "todolist-80768.appspot.com",
    messagingSenderId: "819233590442"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class toDo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Erwin Hessing
        </Text>
        <Text style={styles.instructions}>
          Is controlling you!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('toDo', () => toDo);
