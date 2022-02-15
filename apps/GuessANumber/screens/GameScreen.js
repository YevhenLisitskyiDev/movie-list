import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.round(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(0, 100, props.userChoise)
  );
  const [roundsCount, setRoundsCount] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);


  const {userChoise, onGameOver} = props

  useEffect(() => {
    if (currentGuess === props.userChoise) {
      onGameOver(roundsCount);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoise) ||
      (direction === "greater" && currentGuess > userChoise)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRoundsCount(curRounds => curRounds + 1)
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card styles={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
      <Text>Your number is: {props.userChoise}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: 300,
    padding: 10,
    maxWidth: "80%",
  },
});
