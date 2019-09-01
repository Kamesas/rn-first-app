import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, AsyncStorage } from "react-native";
import GoalInput from "./components/GoalInput.js";
import GoalItem from "./components/GoalItem.js";
import {
  getDataFromStorage,
  setDataFromStorage
} from "./components/AsyncStorage.js";

export default function App() {
  const [courseGoals, setCoursGoals] = useState([]);

  const removeGoalItem = id => {
    setCoursGoals(currGoals => {
      return currGoals.filter(goal => goal.key !== id);
    });
  };

  useEffect(() => {
    getDataFromStorage(setCoursGoals, "tasks");
  }, []);

  useEffect(() => {
    setDataFromStorage("tasks", courseGoals);
  }, [courseGoals]);

  return (
    <View style={styles.appWrapper}>
      <GoalInput setCoursGoals={setCoursGoals} />

      <FlatList
        data={courseGoals}
        renderItem={({ item }) => (
          <GoalItem itemData={item} onDelete={removeGoalItem} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    padding: 20,
    paddingVertical: 30
  }
});
