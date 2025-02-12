import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles"; // ✅ Import global styles

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>This is the details page.</Text>
    </View>
  );
};

export default Details;
