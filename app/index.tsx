import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import NavButton from "../components/ui/NavButton";

const backgroundImage = require("../assets/images/nature-scene_1.png");

export default function Home() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <NavButton
          route="/settings"
          styles={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: 12,
            borderRadius: 20,
            alignItems: "center",
          }}
          stylesText={{ color: "#FFFFFF", fontSize: 40 }}
          textLabel="..."
        />
        <Text style={styles.title}>Meditation App</Text>
        <NavButton
          route="/meditation"
          styles={styles.link}
          stylesText={styles.linkText}
          textLabel="Start Meditating"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    position: "absolute",
    top: 235,
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  link: {
    position: "absolute",
    bottom: 235,
    backgroundColor: "#1E6738",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
