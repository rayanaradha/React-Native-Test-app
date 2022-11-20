import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { StyleSheet, View, FlatList } from 'react-native';

export default function GoalPage() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(goal) {
    setGoalList((goalList)=>[...goalList,goal]);
  }

  function deleteItemHnadler() {
    console.log("Deleted");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.Listcontainer}>
         <GoalInput onAddGoal={addGoalHandler}/>
            <FlatList 
                data={goalList} 
                renderItem={ (itemData) => {
                return(
                    <GoalItem data = {itemData} onDeleteItem={deleteItemHnadler}/>
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
  Listcontainer: {
    flex: 5,
  },
});
