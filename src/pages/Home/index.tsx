import {
  TouchableOpacity,
  Platform,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React, {useContext, useState} from 'react';
import TaskList from '../../components/task';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {TasksContext} from '../../context/TasksContext';

interface Task {
  id: string;
  title: string;
  done: boolean;
}

export default function Home() {
  const {tasks, addTask} = useContext(TasksContext);
  const [currentValue, setCurrentValue] = useState('');

  const handleTask = () => {
    if (currentValue === '') {
      return;
    }

    const data = {
      id: uuidv4(),
      title: currentValue,
      done: false,
    };

    addTask(data);

    setCurrentValue('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          placeholderTextColor="#f1f1f1"
          onChangeText={setCurrentValue}
          value={currentValue}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Tasks</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item: Task) => item.id}
          renderItem={({item}: ListRenderItemInfo<Task>) => (
            <TaskList title={item.title} done={item.done} />
          )}
        />
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
    marginTop: 20,
  },
  input: {
    marginTop: Platform.OS === 'ios' ? 15 : 20,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
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
