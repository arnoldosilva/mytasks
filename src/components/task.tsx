import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TaskList() {
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
