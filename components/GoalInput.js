import { useState } from 'react';
import { StyleSheet, View , TextInput, Button,} from 'react-native';

export default function GoalInput(props) {
  const [goal, setGoal] = useState('');

  function goalInputHnadler(userInput) {
    setGoal(userInput);
  }

  function onAddGoalHandler() {
    props.onAddGoal(goal)
    setGoal('')
  }

  return (
    <View style={styles.TextInputcontainer}>
        <TextInput
          style={styles.TextInput}
          value = {goal}
          onChangeText={goalInputHnadler}
          placeholder="Your course goal!"
        />
        <Button title="Add Goal" onPress={onAddGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
 TextInputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
},
TextInput: {
    borderWidth: 1,
    width: '70%',
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8,
  },
});
