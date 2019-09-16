import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Star Gate !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 112,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: 20,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
    elevation: 2
  },
  header: {
    color: "#fff",
    fontSize: 26,
    letterSpacing: 3,
    fontFamily: "AvenirNext-DemiBold"
  }
});
