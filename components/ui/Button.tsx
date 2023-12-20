import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
export interface ICustomButton {
  onPress?: () => void;
  title: string;
}

export default function CustomButton({ onPress, title }: ICustomButton) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E6738",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
