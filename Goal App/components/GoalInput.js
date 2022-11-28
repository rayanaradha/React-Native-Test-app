import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';

export default function GoalInput(props) {
  const [goal, setGoal] = useState('');

  function goalInputHnadler(userInput) {
    setGoal(userInput);
  }

  function onAddGoalHandler() {
    props.onAddGoal(goal);
    props.closeModel();
    setGoal('');
  }

  function onCloseGoalHandler() {
    props.closeModel();
    setGoal('');
  }

  return (
    <Modal visible={props.showModel} animationType="slide">
      <View style={styles.TextInputcontainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.TextInput}
          value={goal}
          onChangeText={goalInputHnadler}
          placeholder="Your course goal!"
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.Button}>
            <Button title="Add Goal" onPress={onAddGoalHandler}  color="#5e0acc"/>
          </View>
          <View style={styles.Button}>
            <Button title="Cancel" onPress={onCloseGoalHandler}  color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  TextInputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',    
    flex: 1,
  },
  TextInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    padding: 13,
    color: '#120438',
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20,
  }
});
