import React from "react";
import { Text, StyleSheet } from "react-native";

const BoldText = (props) => {
  return <Text style={styles.bold}>{props.children}</Text>;
};

export default BoldText;

const styles = StyleSheet.create({ bold: { fontFamily: openSansBold } });
