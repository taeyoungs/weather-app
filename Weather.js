import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Clear: {
    iconName: 'sun',
    gradient: ['#F37335', '#FDC830'],
    title: 'Weather is Sun, Lorem Ipsum',
    subtitle: 'Cras semper justo sed enim rhoncus, eu eleifend sem rhoncus.',
  },
  Clouds: {
    iconName: 'cloud',
    gradient: ['#304352', 'd7d2cc'],
    title: 'Weather is Clouds, Lorem Ipsum',
    subtitle:
      'Nunc ipsum risus, auctor consectetur blandit ac, condimentum in quam.',
  },
  Haze: {
    iconName: 'cloud',
    gradient: ['#304352', 'd7d2cc'],
    title: 'Weather is Haze, Lorem Ipsum',
    subtitle:
      'Integer egestas quam ac metus posuere, eu dictum tellus fringilla.',
  },
  Fog: {
    iconName: 'cloud',
    gradient: ['#304352', 'd7d2cc'],
    title: 'Weather is Fog, Lorem Ipsum',
    subtitle: 'Quisque aliquet hendrerit urna in tempus.',
  },
  Drizzle: {
    iconName: 'cloud-drizzle',
    gradient: ['#00416a', '#e4e5e6'],
    title: 'Weather is Drizzle, Lorem Ipsum',
    subtitle:
      'Nunc ipsum risus, auctor consectetur blandit ac, condimentum in quam.',
  },
  Rain: {
    iconName: 'cloud-rain',
    gradient: ['#00416a', '#e4e5e6'],
    title: 'Weather is Rain, Lorem Ipsum',
    subtitle: 'Vivamus dapibus tellus nec dictum pellentesque.',
  },
  Snow: {
    iconName: 'cloud-snow',
    gradient: ['#8e9eab', '#eef2f3'],
    title: 'Weather is Snow, Lorem Ipsum',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  Thunderstorm: {
    iconName: 'cloud-lightning',
    gradient: ['#003973', '#e5e5be'],
    title: 'Weather is Thunderstorm, Lorem Ipsum',
    subtitle: 'Curabitur vel fermentum arcu, at ornare nisl.',
  },
  Squall: {
    iconName: 'wind',
    gradient: ['#007991', '#78ffd6'],
    title: 'Weather is Squall, Lorem Ipsum',
    subtitle: 'Fusce congue mi in ex molestie eleifend.',
  },
  Tornado: {
    iconName: 'wind',
    gradient: ['#007991', '#78ffd6'],
    title: 'Weather is Tornado, Lorem Ipsum',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Feather
          name={weatherOptions[condition].iconName}
          size={85}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <View>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontFamily: 'titillium-web-regular',
    fontSize: 40,
    marginVertical: 5,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'titillium-web-regular',
    fontSize: 30,
    lineHeight: 40,
    paddingHorizontal: 35,
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontFamily: 'titillium-web-bold',
    fontSize: 20,
    paddingHorizontal: 35,
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Clear',
    'Clouds',
    'Snow',
    'Rain',
    'Drizzle',
    'Thunderstorm',
    'Fog',
    'Haze',
    'Squall',
    'Tornado',
  ]),
};
