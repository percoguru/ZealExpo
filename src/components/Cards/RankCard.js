import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

function RankCard(props) {
    if(props.rank === '1')
    return(
        <ImageBackground
          style={{ flex: 1, margin: 20, padding: 20, borderRadius: 20, overflow: "hidden", minHeight: 200 }}
          source={require('../../../assets/gold.jpg')} >
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontSize: 32, fontFamily: "sans-serif-thin" }}>{props.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Wins</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Losses</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Points</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.wins}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.losses}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.points}</Text>
            </View>
        </ImageBackground>
    )
    else if(props.rank === '2')
    return(
        <ImageBackground
          style={{ flex: 1, margin: 20, padding: 20, borderRadius: 20 , overflow: "hidden" , minHeight: 200 }}
          source={require('../../../assets/silver.jpg')}
        >
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontSize: 32, fontFamily: "sans-serif-thin" }}>{props.name}</Text>
            </View>
  
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Wins</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Losses</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Points</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.wins}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.losses}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.points}</Text>
            </View>
        </ImageBackground>
    )
    else
    return(
        <ImageBackground
          style={{ flex: 1, margin: 20, padding: 20, borderRadius: 20 , overflow: "hidden", minHeight: 200 }}
          source={require('../../../assets/bronze.jpg')}
        >
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontSize: 32, fontFamily: "sans-serif-thin" }}>{props.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Wins</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Losses</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>Points</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row"}}>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.wins}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.losses}</Text>
            <Text style={{ flex: 1, textAlign: "center", fontSize: 30, fontFamily: "sans-serif-condensed"}}>{props.points}</Text>
            </View>
        </ImageBackground>
    )
}

export default RankCard;