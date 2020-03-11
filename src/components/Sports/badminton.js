import React, { Component } from 'react';
import { Button, View, Text, TouchableNativeFeedback, Platform } from 'react-native';


class Badminton extends Component(){
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1, alignContent: 'space-around', flexWrap: 'nowrap' }}>
          <View style = {{ flex: 1, backgroundColor: '#fc0352' }} >
            
          </View>
          <View
            style = {{ flex: 1, backgroundColor: '#fc0343' }}
          />
          <View
            style = {{ flex: 1, backgroundColor: '#ffffff' }}
          />
      </View>
        )
    }
};

export default Badminton;