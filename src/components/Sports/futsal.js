import React, { Component } from 'react';
import { Button, View, Text, TouchableNativeFeedback, Platform } from 'react-native';


class Futsal extends Component{
    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Futsal</Text>
        <Button
          title="Go back to first screen in stack"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );}
  }

export default Futsal;