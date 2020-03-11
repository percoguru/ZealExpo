
import React, { Component } from 'react';
import { Button, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './homeScreen';
import StatsScreen from './statsScreen';
import Fixtures from './fixtures';


const Tab = createBottomTabNavigator();

class Holder extends Component {
  render() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fixtures" component={Fixtures} />
        <Tab.Screen name="Stats" component={StatsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
}

export default Holder;