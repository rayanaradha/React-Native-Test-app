import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalList(props) {
  return (
    <View style={styles.Listcontainer}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.data.index)}
      >
        <Text key={props.data.index} style={styles.List}>
          {props.data.item}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Listcontainer: {
    flex: 5,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    margin: 10,
  },
  List: {
    padding: 8,
    color: 'white',
  },
});
