import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCoursGoals] = useState([]);

  handleChangeInputGoal = e => {
    setEnteredGoal(e);
  };

  addGoal = () => {
    enteredGoal.trim() !== "" &&
      setCoursGoals(prevGoals => [...prevGoals, enteredGoal]);
    setEnteredGoal("");
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

      <ScrollView>
        {courseGoals.map((goal, i) => (
          <View style={styles.listItem} key={i}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
