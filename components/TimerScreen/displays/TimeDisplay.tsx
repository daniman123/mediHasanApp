import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTimeValueDisplay } from "../../../lib/utils";

export interface ITimeDisplay {
  seconds: number;
  isActive: boolean;
  isRuntimePaused: boolean;
  toggleActiveRuntime: () => void;
  resetTimer: () => void;
}

const TimeDisplay = ({
  seconds,
  isActive,
  isRuntimePaused,
  toggleActiveRuntime,
  resetTimer,
}: ITimeDisplay) => {
  if (isActive || isRuntimePaused) {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.timeValue}>{formatTimeValueDisplay(seconds)}</Text>
        </View>
        <TouchableOpacity style={styles.pauseButton} onPress={toggleActiveRuntime}>
          <Text style={styles.pauseButtonText}>{!isRuntimePaused ? "II" : "▶"}</Text>
        </TouchableOpacity>
        {isRuntimePaused && (
          <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        )}
      </>
    );
  }
};

export default TimeDisplay;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
  },
  timeValue: {
    fontSize: 20,
  },
  pauseButton: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#79c2d0",
    position: "absolute",
    bottom: 210,
  },
  pauseButtonText: {
    fontSize: 44,
    color: "white",
  },
  resetButton: {
    height: 50,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#79c2d0",
    position: "absolute",
    bottom: 140,
  },
  resetButtonText: {
    fontSize: 24,
    color: "white",
  },
});
