// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker } from 'react-native';
import Dropdown from "./Components/Dropdown"

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Dropdown />
        <Dropdown />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height : "60%",
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
