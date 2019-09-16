import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/header/Header";
import ImageCard from "./components/ImageCard/ImageCard";

export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList()
      .then(data => setMovieList(data))
      .catch(e => console.log("Error => ", e));
  }, []);

  const fetchMovieList = async () => {
    const response = await fetch(
      "https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json"
    );
    const data = await response.json();
    return data;
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.cardContainer}>
          {movieList.map(item => {
            return <ImageCard key={item.id} card={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#fff"
  },
  cardContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 2,
    justifyContent: "space-evenly",
    marginBottom: 20
  }
});
