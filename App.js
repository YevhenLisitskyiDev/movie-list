import React from "react";
import { StyleSheet, View } from "react-native";
import AddGoal from "./apps/addGoal/AddGoal";

export default function App() {
 

 

  return (
    <View >
      {/* App for creating course goals list  */}
      <AddGoal />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
