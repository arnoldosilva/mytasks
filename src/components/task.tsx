import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface Task {
  title: string;
  done: boolean;
}

export default function TaskList({title, done}: Task) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29292e',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 20,
  },
});
