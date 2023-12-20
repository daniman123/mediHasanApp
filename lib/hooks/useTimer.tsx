import { useCallback, useEffect, useState } from "react";

import { createTable, insertToTable } from "../services/database/actions";
import { Tfn } from "../types";
import { useSoundPlayer } from "./useAudioPlayer";

export const useTimer = (
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  initialSeconds: number,
  isRuntimePaused: boolean
) => {
  useEffect(() => {
    createTable();
  }, []);

  const [seconds, setSeconds] = useState(initialSeconds);

  const updateSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }, []);

  handleInterval(isActive, updateSeconds, isRuntimePaused);

  const playSound = useSoundPlayer(
    require("../../assets/audio/singing-bowl_23042017-01-raw-71015.mp3")
  );

  useEffect(() => {
    if (seconds <= 0) {
      console.log("Timer has finished or reset.");
      insertToTable(initialSeconds);
      setIsActive(false);

      playSound().catch((error) => console.error("Error playing sound:", error));
    }
  }, [seconds, setIsActive, initialSeconds]);

  return [seconds, setSeconds] as const;
};

const handleInterval = (isActive: boolean, updateSeconds: Tfn, isRuntimePaused: boolean) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && !isRuntimePaused) {
      interval = setInterval(updateSeconds, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, updateSeconds, isRuntimePaused]);
};
