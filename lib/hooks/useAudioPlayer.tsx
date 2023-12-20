import { AVPlaybackSource, Audio } from "expo-av";
import { useEffect, useState } from "react";

export const useSoundPlayer = (soundFile: AVPlaybackSource) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function loadAndPlaySound() {
    console.log("Loading Sound");
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return loadAndPlaySound;
};
