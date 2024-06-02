import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Messages = () => {
  return (
    <View style={styles.root}>
      <Text>Messages Coming Soon...</Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  root: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
