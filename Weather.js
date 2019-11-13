import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};
