import React, {component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, StatusBar, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Rain: {
      colors: ["#00C6FB", "#005BEA"],
      title: "Raining like a MF",
      subtitle: "For more info look outside",
      icon: "weather-rainy"
    },
    Clear: {
      colors: ["#FEF253", "#FF7300"],
      title: "Sunny as fuck",
      subtitle: "Go get your ass burnt",
      icon: "weather-sunny"
    },
    Thunderstorm: {
      colors: ["#00ECBC", "#007ADF"],
      title: "Thunderstorm in the house",
      subtitle: "Actually, outside of the house",
      icon: "weather-lightning"
    },
    Clouds: {
      colors: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "I know, fucking boring",
      icon: "weather-cloudy"
    },
    Snow: {
      colors: ["#7DE2FC", "#B9B6E5"],
      title: "Cold as balls",
      subtitle: "Do you want to build a snowman? Fuck no.",
      icon: "weather-snowy"
    },
    Drizzle: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Is like rain, but gay 🏳️‍🌈",
      icon: "weather-hail"
    },
    Haze: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Haze",
      subtitle: "Don't know what that is 💩",
      icon: "weather-hail"
    },
    Mist: {
      colors: ["#D7D2CC", "#304352"],
      title: "Mist!",
      subtitle: "It's like you have no glasses on.",
      icon: "weather-fog"
    }
  };

export default function Weather({temp, condition, icon}){
    condition = "Mist"
    const wc = weatherOptions[condition];
    return (
        <LinearGradient
          colors={wc.colors}
          style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.upper}>  
                <MaterialCommunityIcons size={86} name={wc.icon} color='white'/>
                <Text style={styles.temp}>
                    {temp}°
                </Text> 
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{wc.title}</Text>
                <Text style={styles.subtitle}>
                {wc.subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstom","Drizzle","Rain","Snow",
    "Atmosphere","Clear","Clouds","Haze","Mist",'Dust']).isRequired,
    icon : PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container : {
        flex :1, 
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10 
      },
    upper:{
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    lower:{
        flex : 1,
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingLeft: 25,
        paddingLeft: 25,
        paddingRight: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
      },
      subtitle: {
        marginBottom: 100,
        backgroundColor: "transparent",
        color: "white",
        fontSize: 24, 
        marginBottom: 24
      }
})
