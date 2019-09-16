import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { width } from "../../constants";

const ImageCard = ({ card }) => {
  const { image, name } = card;
  return (
    <View style={{ width: width / 2.4, padding: 10 }}>
      <Image source={{ uri: `${image}` }} style={styles.image} />
      <Text style={styles.imageTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase"
  },
  image: {
    height: width * 0.63,
    borderRadius: 10,
    marginBottom: 10
  }
});

export default ImageCard;
