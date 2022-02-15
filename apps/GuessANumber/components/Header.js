import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
