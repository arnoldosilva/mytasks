import {
  TouchableOpacity,
  Platform,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import TaskList from '../../components/task';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          placeholderTextColor="#f1f1f1"
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Tasks</Text>
        <TaskList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    marginTop: Platform.OS === 'ios' ? 15 : 20,
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  buttonText: {
    color: '#f1f1f1',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 7,
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    backgroundColor: '#29292e',
  },
});
