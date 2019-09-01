import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
  Modal
} from "react-native";

const GoalInput = ({ setCoursGoals, isAddMode, setIsAddMode }) => {
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
    Keyboard.dismiss();
    setIsAddMode(false);
  };

  handleSubmit = () => {
    addGoal();
    setIsAddMode(false);
  };

  return (
    <Modal visible={isAddMode} animationType={"slide"}>
      <View style={styles.addFormWrapper}>
        <TextInput
          placeholder="Enter todo"
          style={styles.textInputStyle}
          value={enteredGoal}
          onChangeText={handleChangeInputGoal}
          onSubmitEditing={handleSubmit}
        />
        <Button
          title="Add"
          style={styles.addButton}
          color="#aaa"
          onPress={addGoal}
        />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addFormWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .85)",
    width: "100%"
  },
  textInputStyle: {
    width: "100%",
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "#fff"
  },
  addButton: {
    padding: 10,
    width: "50%"
  }
});
