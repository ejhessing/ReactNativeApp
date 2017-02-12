/**
 * Sample To Do App Made with React Native
  * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative from 'react-native';
import StatusBar from './components/statusBar';
import ListItem from './components/listItem';
import ActionButton from './components/actionButton';
import * as firebase from 'firebase';
import styles from './css/styles'

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;

const firebaseConfig = {
    apiKey: "AIzaSyDn9NHeZoPISI03VQkEPlwIEtrm0co5Obc",
    authDomain: "todolist-80768.firebaseapp.com",
    databaseURL: "https://todolist-80768.firebaseio.com",
    storageBucket: "todolist-80768.appspot.com",
    messagingSenderId: "819233590442"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

class toDo extends Component {
constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
}

componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Eat Dinner' }])
    })
  }


_renderItem(item) {
  return (
    <ListItem item={item} onpress="{() => {}}" />
  );
}

render() {
    return (
      <View style={styles.container}>

        <StatusBar title="To Do List"/>

        <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this._renderItem.bind(this)} 
          style={styles.listview}/>

        <ActionButton title="Add" onpress="{()"  />

      </View>
    );
  }

}

AppRegistry.registerComponent('toDo', () => toDo);