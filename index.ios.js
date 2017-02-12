/**
 * Sample To Do App Made with React Native
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
import styles from './css/styles'


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
        <Text>
          To Do List
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('toDo', () => toDo);
