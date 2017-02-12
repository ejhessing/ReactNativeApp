import React, { Component } from 'react';

import ReactNative from 'react-native';

const styles = require('../css/styles');

const { StyleSheet, Text, View } = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.statusbar}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}> {this.props.title} </Text>
        </View>
      </View>
    );
  }
}

module.exports = StatusBar;
