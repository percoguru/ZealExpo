import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
        margin: 20,
        minHeight: 200,
        padding: 20,
    },
    sportsname : {
        fontSize: 32,
        fontFamily: "sans-serif-thin", 
        textAlign: "center",
        fontWeight: "bold" 
    },
    entry: { 
        flex: 1,
        fontSize: 18, 
        fontFamily: "sans-serif-thin", 
        textAlign: "right", 
        marginTop: 20
    },
    col: {
        flex: 1, 
        flexDirection: "column"
    },
    ro : {
        flex: 1, 
        flexDirection: "row"
    },
    entrytitle: {
        flex: 1,
        fontSize: 18, 
        fontFamily: "sans-serif-thin", 
        textAlign: "left", 
        marginTop: 20, 
        fontWeight: "bold"
    }

  })

function SportsCard(props) {
    return(
        <View
          style={ styles.containerStyle } >
            <View style={styles.col}>
                <Text style={styles.sportsname}>{props.name}</Text>
                <View style={styles.ro}>
                    <Text style={styles.entrytitle}>Coordinator:</Text>
                    <Text style={styles.entry}>{props.coordinator}</Text>
                </View>
            </View>
            
        </View>
    )
}



export default SportsCard;