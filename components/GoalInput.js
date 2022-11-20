import { useState } from 'react';
import GoalItem from './GoalItem';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';

export default function GoalInput() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  function goalInputHnadler(userInput) {
    setGoal(userInput);
  }

  function addGoalHandler() {
    setGoalList((goalList)=>[...goalList,goal]);
    setGoal('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.TextInputcontainer}>
        <TextInput
          style={styles.TextInput}
          value = {goal}
          onChangeText={goalInputHnadler}
          placeholder="Your course goal!"
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.Listcontainer}>
        <FlatList 
            data={goalList} 
            renderItem={ (itemData) => {
            return(
                <GoalItem data = {itemData}/>
            );
        }}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  TextInputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
  },
  Listcontainer: {
    flex: 5,
  },
  TextInput: {
    borderWidth: 1,
    width: '70%',
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8,
  },
});
