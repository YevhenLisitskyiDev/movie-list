import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={{...styles.card, ...props.styles}}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // IOS 
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    // Android 
    elevation: 5,

    borderRadius: 10,
    backgroundColor: "white",
  },
});
