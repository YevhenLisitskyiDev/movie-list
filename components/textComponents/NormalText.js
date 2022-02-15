import React from "react";
import { Text, StyleSheet } from "react-native";

const NormalText = (props) => {
  return <Text style={styles.bold}>{props.children}</Text>;
};

export default NormalText;

const styles = StyleSheet.create({ bold: { fontFamily: openSansBold } });
