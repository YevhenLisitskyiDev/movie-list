import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default GuessANumber = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startNewgameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && !guessRounds) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (guessRounds) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onNewGame={startNewgameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Guess a Number" />
      {content}
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
