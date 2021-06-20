import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import * as Font from 'expo-font';
import traceLogo from './assets/trace.png'

export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'PlaylistScript': require('./assets/fonts/PlaylistScript.ttf')
    });

    this.setState({ fontLoaded: true })
  }

  render(){

    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.mainComponent}>
        <Image source={traceLogo} style={{ width: 250, height: 200, justifyContent: 'center', alignItems: 'center' }} />
          {this.state.fontLoaded ?
         (
         <Text style={styles.mainComponentFont}> trace
        </Text>) :
        (<ActivityIndicator size="large" />)
          }
         </SafeAreaView>
       </SafeAreaView>
     );

  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainComponent: {
    backgroundColor: 'thistle',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainComponentFont: {
    fontFamily: 'PlaylistScript',
    fontSize: 78,
    textAlign: 'center',
    // backgroundColor: 'white',
    width: 250,

  }
});
