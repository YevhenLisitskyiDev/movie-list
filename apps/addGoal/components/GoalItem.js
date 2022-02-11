import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


const GoalItem = ({ title, id, onDelete}) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    fontWeight: "800",
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
  },
});
