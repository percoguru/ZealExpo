
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DayOne from './Days/dayOne.js';
import DayTwo from './Days/dayTwo.js';
import DayThree from './Days/dayThree.js';
import DayHome from './Days/dayHome.js';

const HomeStack = createStackNavigator();

class HomeScreen extends Component {
  render() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="dayHome" component={DayHome} options={{
            title: 'Zeal 2020'
          }}/>
      <HomeStack.Screen name="DayOne" component={DayOne} options={{ title: 'Zeal 2020 Day One' }}/>
      <HomeStack.Screen name="DayTwo" component={DayTwo} options={{ title: 'Zeal 2020 Day Two' }}/>
      <HomeStack.Screen name="DayThree" component={DayThree} options={{ title: 'Zeal 2020 Day Three' }}/>
    </HomeStack.Navigator>
  );
  }
}



export default HomeScreen;