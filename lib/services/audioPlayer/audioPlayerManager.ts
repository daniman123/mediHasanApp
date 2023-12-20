import { Audio } from "expo-av";

export async function loadSound(
  setSound: React.Dispatch<React.SetStateAction<Audio.Sound | undefined>>
) {
  console.log("Loading Sound");
  const { sound } = await Audio.Sound.createAsync(
    require("../../../assets/audio/singing-bowl_23042017-01-raw-71015.mp3")
  );
  setSound(sound);
}
