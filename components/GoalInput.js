import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

const GoalInput = ({ setCoursGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  handleChangeInputGoal = e => {
    setEnteredGoal(e);
  };

  addGoal = () => {
    enteredGoal.trim() !== "" &&
      setCoursGoals(prevGoals => [
        ...prevGoals,
        { key: Math.random().toString(), value: enteredGoal }
      ]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.addFormWrapper}>
      <TextInput
        placeholder="Enter todo"
        style={styles.textInputStyle}
        value={enteredGoal}
        onChangeText={handleChangeInputGoal}
      />
      <Button title="Add" style={styles.addButton} onPress={addGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addFormWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputStyle: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
    //flexGrow: 1
  },
  addButton: {
    padding: 50,
    backgroundColor: "#aaa"
  }
});
