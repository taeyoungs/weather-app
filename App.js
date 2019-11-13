import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import * as Font from 'expo-font';
import axios from 'axios';

const API_KEY = '817ffc0d71bc664fdce604e353473138';

export default class extends React.Component {
  state = {
    isLoading: true,
    fontLoaded: false,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
    );
    this.setState({ isLoading: false, temp: data.main.temp });
  };

  getGeolocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };

  getFont = async () => {
    try {
      await Font.loadAsync({
        'titillium-web-regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
        'titillium-web-bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log(error);
    }
  };

  componentWillMount() {
    this.getFont();
    this.getGeolocation();
  }
  render() {
    const { isLoading, fontLoaded, temp } = this.state;
    return fontLoaded ? (
      isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} />
      )
    ) : null;
  }
}
