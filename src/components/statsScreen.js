
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {db} from '../config';
import LeaderBoard from './LeaderBoard';

const statsStack = createStackNavigator();


class statsScreen extends Component {
  
  render() {
  return (
    <statsStack.Navigator>
      <statsStack.Screen name="stats" component={LeaderBoard} options={{
            title: 'LeaderBoard'}} />
    </statsStack.Navigator>
  );
  }
}



export default statsScreen;