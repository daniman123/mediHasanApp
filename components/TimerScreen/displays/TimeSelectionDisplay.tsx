import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import SetTimePicker from "../controls/SetTimePicker";
export interface first {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  selectedSeconds: number;
  setSelectedSeconds: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  toggleTimer: () => void;
  isRuntimePaused: boolean;
}

const TimeSelectionDisplay = ({
  isActive,
  selectedSeconds,
  setSeconds,
  setSelectedSeconds,
  toggleTimer,
  isRuntimePaused,
}: first) => {
  if (!isActive && !isRuntimePaused) {
    return (
      <>
        <Text style={styles.title}>Select Duration</Text>
        <SetTimePicker
          selectedSeconds={selectedSeconds}
          setSeconds={setSeconds}
          setSelectedSeconds={setSelectedSeconds}
          isActive={isActive}
        />
        <TouchableOpacity style={styles.startButton} onPress={toggleTimer}>
          <Text style={styles.startButtonText}>&#x25B6;</Text>
        </TouchableOpacity>
      </>
    );
  }
};

export default TimeSelectionDisplay;

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: 200,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  startButton: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#79c2d0",
    position: "absolute",
    bottom: 210,
  },
  startButtonText: {
    fontSize: 44,
    color: "white",
  },
});
