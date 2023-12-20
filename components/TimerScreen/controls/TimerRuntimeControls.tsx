import { Button } from "react-native";

export interface ITimerRuntimeControls {
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
}

export const TimerRuntimeControls = ({
  isActive,
  resetTimer,
  toggleTimer,
}: ITimerRuntimeControls) => {
  return (
    <>
      <Button onPress={toggleTimer} title={isActive ? "Pause" : "Start"} />
      <Button onPress={resetTimer} title="Reset" />
    </>
  );
};
