import React from 'react';

import * as Location from 'expo-location'
import {Alert} from 'react-native'
import axios from 'axios'
import Loading from './Loading.js'
import Weather from './Weather.js'


const API_KEY = '7d452f174c0e5bec9a20e431b4c55760'

export default class App extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) =>{
    console.log(latitude, longitude)
    const { data :{
      main : {temp},
      weather
    } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
    
    
    this.setState({isLoading:false, 
      condition : weather[0].main,
      icon : weather[0].icon,
      temp : temp
    })
    
  }
  getLocation = async() => {
    try{
      console.log('=========')
      const response = await Location.requestPermissionsAsync()
      // console.log(response)
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync()
      
      this.getWeather(latitude, longitude)
      
    }
    catch (error)
    { 
      Alert.alert('error', 'so sad')
    }
  }
  componentDidMount(){
    this.getLocation()
  }
  render(){
    const {isLoading, temp, condition,icon} = this.state
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} icon={icon}/>
    );
  }
}

 