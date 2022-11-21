import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'react-native';

export default function GoalPage() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);

  function startAddGoalHnadler() {
    setmodalVisible(true);
  }

  function endAddGoalHnadler() {
    setmodalVisible(false);
  }

  function addGoalHandler(goal) {
    setGoalList((goalList) => [...goalList, goal]);
  }

  function deleteItemHnadler(id) {
    setGoalList((goalList) => {
      return goalList.filter((goal, index) => index != id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        onPress={startAddGoalHnadler}
      />
      <GoalInput onAddGoal={addGoalHandler} showModel={modalVisible} closeModel={endAddGoalHnadler}/>
      <View style={styles.Listcontainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem data={itemData} onDeleteItem={deleteItemHnadler} />
            );
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  Listcontainer: {
    flex: 5,
    paddingTop: 30,
  },
});
