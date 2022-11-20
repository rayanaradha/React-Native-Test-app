import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function GoalList(props) {

  return (
    <View style={styles.Listcontainer}>
          <Text key={props.data.index} style={styles.List}>{props.data.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Listcontainer: {
    flex: 5,
  },
  List: {
   margin : 10,
   padding:8,
   borderRadius: 6,
   backgroundColor: '#5e0acc',
   color: 'white',
  },
});
