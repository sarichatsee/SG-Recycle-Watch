import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Use Native Stack
import HomeScreen from "./src/pages/Home";
import DetailsScreen from "./src/pages/Details"; // Fixed incorrect path

const Stack = createNativeStackNavigator(); // Use Native Stack

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Hide header if needed
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: "Details Page" }} // Custom header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
