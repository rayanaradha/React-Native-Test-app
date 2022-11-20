import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function GoalList(props) {

  return (
    <Pressable  on onPress={props.onDeleteItem}>
        <View style={styles.Listcontainer}>
            <Text key={props.data.index} style={styles.List}>{props.data.item}</Text>
        </View>
    </Pressable>
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
