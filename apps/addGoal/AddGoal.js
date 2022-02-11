import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function AddGoal() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addGoalModalIsOpen, setAddGoalModalIsOpen] = useState(false);

  const closeAddGoalModal = () => {
    setAddGoalModalIsOpen(false);
  };

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    closeAddGoalModal();
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key != goalId)
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="addNewGoal"
        onPress={() => {
          setAddGoalModalIsOpen(true);
          console.log(addGoalHandler);
        }}
      />
      <GoalInput
        visible={addGoalModalIsOpen}
        onAddGoal={addGoalHandler}
        onCancel={closeAddGoalModal}
      />

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.key}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    // marginBottom: 10
  },
  button: {
    width: "100",
  },
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
