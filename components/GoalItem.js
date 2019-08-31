import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ itemData: { key, value }, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={() => onDelete(key)}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 2
  }
});
