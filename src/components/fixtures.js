
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Sports from './Sports/sportsHolder';


const FixturesStack = createStackNavigator();


class Fixtures extends Component {
  render() {
  return (
    <FixturesStack.Navigator>
      <FixturesStack.Screen name="dayHome" component={Sports} options={{ title: 'Fixtures' }}/>
    </FixturesStack.Navigator>
  );
  }
}



export default Fixtures;