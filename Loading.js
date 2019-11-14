import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the weather information</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#74b9ff',
    paddingHorizontal: 40,
    paddingVertical: 90,
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'titillium-web-regular',
  },
});
