import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/styles";

const Details = () => {
  const route = useRoute();
  const { item } = route.params;

  // Convert recycling rate to a number for comparison
  const recyclingRate = parseFloat(item.recycling_rate);

  // Select appropriate GIF based on recycling rate
  let gifSource = null;
  if (recyclingRate > 75) {
    gifSource = require("../assets/bowser-happy.gif"); // 🎉 Happy Bowser
  } else if (recyclingRate <= 25) {
    gifSource = require("../assets/bowser-die.gif"); // 💀 Sad Bowser
  }

  return (
    <View style={styles.container}>
      <Text style={styles.detailTitle}>♻️ Recycling Rate Details</Text>
      <Text style={styles.detailText}>Waste Type: {item.waste_type}</Text>
      <Text style={styles.detailText}>Year: {item.year}</Text>
      <Text style={styles.detailText}>
        Recycling Rate: {item.recycling_rate}%
      </Text>

      {/* Show GIF only if recycling rate meets conditions */}
      {gifSource && (
        <Image source={gifSource} style={styles.bowserGif} />
      )}
    </View>
  );
};

export default Details;
