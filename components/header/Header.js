import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Movie app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
    elevation: 2
  },
  header: {
    color: "#fff",
    fontSize: 26,
    letterSpacing: 3
  }
});
