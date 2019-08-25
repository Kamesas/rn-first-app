import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCoursGoals] = useState([]);

  handleChangeInputGoal = e => {
    setEnteredGoal(e);
  };

  addGoal = () => {
    enteredGoal.trim() !== "" &&
      setCoursGoals(prevGoals => [
        ...prevGoals,
        { key: Math.random().toString(), value: enteredGoal }
      ]);
    // setEnteredGoal("");
  };

  return (
    <View style={styles.appWrapper}>
      <View style={styles.addFormWrapper}>
        <TextInput
          placeholder="Enter todo"
          style={styles.textInputStyle}
          value={enteredGoal}
          onChangeText={handleChangeInputGoal}
        />
        <Button title="Add" style={styles.addButton} onPress={addGoal} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    padding: 20,
    paddingVertical: 30
  },
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
  },
  listItem: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 2
  }
});
