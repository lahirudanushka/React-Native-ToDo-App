
import React, { useState } from 'react';
import { Keyboard, ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import styles from './styles/appStyles';
import { Divider, Icon } from "react-native-elements";

export default function App() {
  const initialState = "";
  const [task, setTask] = useState(initialState);
  const [taskItems, setTaskItems] = useState([]);
  // const [textInput, setTextInput] = useState()

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task != "") setTaskItems([...taskItems, task]);
    setTask("");
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.selectionTitle}>MY TASKS</Text>
        <Divider style={styles.devider} />
      </View>

      <ScrollView style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (
              < TouchableOpacity key={index} onPress={() => completeTask(index)} >
                <Task text={item} />
              </ TouchableOpacity>)
          })
        }

      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={"Write a task"} onChangeText={text => setTask(text)} value={task}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>

            <Icon
              color="#0CC"
              iconProps={{}}
              iconStyle={{}}
              name="add"
              onLongPress={{}}
              onPress={() => handleAddTask()}
              size={20}
              type="material"
            />

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}


