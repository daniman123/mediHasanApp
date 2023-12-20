import React from "react";
import useMeditationTimer from "../../lib/hooks/useMeditationTimer";
import TimeDisplay from "./displays/TimeDisplay";
import TimeSelectionDisplay from "./displays/TimeSelectionDisplay";

const TimerScreen = () => {
  const {
    seconds,
    setSeconds,
    selectedSeconds,
    setSelectedSeconds,
    isActive,
    resetTimer,
    toggleTimer,
    toggleActiveRuntime,
    isRuntimePaused,
  } = useMeditationTimer();

  return (
    <>
      <TimeDisplay
        seconds={seconds}
        isActive={isActive}
        isRuntimePaused={isRuntimePaused}
        toggleActiveRuntime={toggleActiveRuntime}
        resetTimer={resetTimer}
      />
      <TimeSelectionDisplay
        isActive={isActive}
        selectedSeconds={selectedSeconds}
        setSeconds={setSeconds}
        setSelectedSeconds={setSelectedSeconds}
        toggleTimer={toggleTimer}
        isRuntimePaused={isRuntimePaused}
      />
    </>
  );
};

export default TimerScreen;
