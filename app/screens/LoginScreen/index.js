import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

export default LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
