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
};
const firebaseDB = firebase.initializeApp(firebaseConfig);

class toDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = firebaseDB.database().ref();
  }

  componentDidMount() {
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows([{ title: 'Eat Dinner' }, { title: 'Eat Dinner' }])
    // })
    this.listenForItems(this.itemsRef)
  }

 _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }


  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
    
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
  
    });
  }



  _renderItem(item) {
    return (
      <ListItem item={item} onpress="{() => {}}" />
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="To Do List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview} />

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    );
  }

}

AppRegistry.registerComponent('toDo', () => toDo);