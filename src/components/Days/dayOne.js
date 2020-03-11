import React, { Component } from 'react';
import { ScrollView, Button, View, Text, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';




class DayOne extends Component{
    render() {
        return (
          <ImageBackground source={require('../../../assets/cricket.jpg')} style={{ flex: 1, margin: 20, padding: 20, borderRadius: 20 , overflow: "hidden" }}>
          <Text>Day 1</Text>
        </ImageBackground>
        );
    }
};

export default DayOne;