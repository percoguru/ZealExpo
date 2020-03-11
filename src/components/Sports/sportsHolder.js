import React, { Component } from 'react';
import { Button, View, Text, TouchableNativeFeedback, Platform, FlatList, StyleSheet } from 'react-native';
import { db } from '../../config';
import SportsCard from '../Cards/SportsCard';


class Sports extends Component{

    constructor(){
        super();
        this.state = {
            all_sports: new Array
        }
    }

    componentDidMount() {
        db.ref('/Sports').on('value', querySnapShot => {
            var arr = [];
            querySnapShot.forEach(element => {
                arr.push(element.val());
            });
            this.setState({
                all_sports: arr
            })
          });
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1, alignContent: 'space-around', flexWrap: 'nowrap' }} >
                <FlatList
                    data={this.state.all_sports}
                    renderItem={({item}) => <SportsCard name={item.name} coordinator={item.coordinator}></SportsCard>}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  

export default Sports;