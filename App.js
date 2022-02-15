import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddGoal from "./apps/addGoal/AddGoal";
import GuessANumber from "./apps/GuessANumber/GuessANumber";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold ": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

const customFonts = {
  openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <View><Text>Do thist</Text></View>;
    // return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* App for creating course goals list  */}
      {/* <AddGoal /> */}

      <GuessANumber />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
