import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { FlatList, Button, StyleSheet, View } from 'react-native';

export default function HomePage() {
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
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={startAddGoalHnadler} />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModel={modalVisible}
          closeModel={endAddGoalHnadler}
        />
      </View>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  Listcontainer: {
    flex: 8,
    paddingTop: 10,
  },
});
