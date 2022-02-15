import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Input = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.styles}}/>;
};

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10
    }
});
