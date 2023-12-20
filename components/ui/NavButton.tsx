import { useRouter } from "expo-router";
import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity } from "react-native";

export interface INavButton {
  styles?: StyleProp<TextStyle>;
  stylesText?: StyleProp<TextStyle>;
  route: string;
  textLabel: string;
}

const NavButton = ({ styles, stylesText, route, textLabel }: INavButton) => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles} onPress={() => router.push(route as `http${string}`)}>
      <Text style={stylesText}>{textLabel}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
