import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView, ImageBackground } from 'react-native';

export default class DayHome extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={require('../../../assets/dayone.jpg')} style={{ flex: 1, borderRadius: 10 , overflow: "hidden" }}>
        <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('DayOne')}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        </ImageBackground>
        <ImageBackground source={require('../../../assets/cricket.jpg')} style={{ flex: 1, marginTop: 10, padding: 20, borderRadius: 10 , overflow: "hidden" }}>
        <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('DayTwo')}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            
            <Text style={styles.buttonText}>{Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        </ImageBackground>
        <ImageBackground source={require('../../../assets/daythree.jpg')} style={{ flex: 1, marginTop: 10, marginBottom: 30, borderRadius: 10 , overflow: "hidden" }}>
        <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('DayThree')}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
  },
  button: {
    marginBottom: 30,
    height: 300
  },
  buttonText: {
    textAlign: 'left',
    padding: 100,
    fontSize: 40,
    color: 'black',
    fontFamily: 'notoserif'
  }
});
