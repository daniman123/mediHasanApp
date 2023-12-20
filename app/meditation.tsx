import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import TimerScreen from "../components/TimerScreen/TimerScreen";
import NavButton from "../components/ui/NavButton";

const backgroundImage = require("../assets/images/nature-scene_2.png");

const Meditation = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <NavButton
          route="/"
          styles={styles.goBackButton}
          stylesText={styles.goBackButtonText}
          textLabel="X"
        />
        <TimerScreen />
      </View>
    </ImageBackground>
  );
};

export default Meditation;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goBackButton: {
    position: "absolute",
    top: 55,
    left: 30,
  },
  goBackButtonText: {
    fontSize: 25,
    color: "white",
  },
});
