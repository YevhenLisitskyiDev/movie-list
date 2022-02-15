import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  let confirmedOutput = undefined;

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("InvalidNumber", "Input data is incorrect", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss;
  };

  if (confirmed) {
    confirmedOutput = (
      <Card styles={styles.summaryCard}>
        <Text>Chosen Number: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
        //   color={colors.accent} 
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.screen}>
        <View>
          <Text style={styles.title}>Start a New Game</Text>
        </View>
        <Card styles={styles.inputContainer}>
          <View>
            <Text style={styles.inputTitle}>Select a Number</Text>
          </View>
          <Input
            styles={styles.input}
            blurOnsubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.primary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.accent}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    padding: 20,
    alignItems: "center",
    // justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "openSansBold",
  },
  inputContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  inputTitle: {
    width: "100%",
    fontSize: 24,

    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "black"
  },
  button: {
    width: 100,
  },
  summaryCard: {
    marginVertical: 20,
    padding: 20,
    alignItems: "center",
  },
});
