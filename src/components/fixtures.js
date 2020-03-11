
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



const FixturesStack = createStackNavigator();

function fixture() {
    return (
        <View></View>
    )
}

class Fixtures extends Component {
  render() {
  return (
    <FixturesStack.Navigator>
      <FixturesStack.Screen name="dayHome" component={fixture} options={{ title: 'Fixtures' }}/>
    </FixturesStack.Navigator>
  );
  }
}



export default Fixtures;