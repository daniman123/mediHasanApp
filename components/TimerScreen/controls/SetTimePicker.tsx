import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet } from 'react-native';
import { formatTimeValueDisplay } from '../../../lib/utils';

export interface ISetTimePicker {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  selectedSeconds: number;
  setSelectedSeconds: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
}

const timeOptions = [
  ...Array.from({ length: 2 }, (_, i) => 5 + 5 * i),
  ...Array.from({ length: 3 }, (_, i) => 15 + 15 * i),
  ...Array.from({ length: 60 }, (_, i) => 60 + 60 * i),
];

const SetTimePicker = ({
  setSeconds,
  selectedSeconds,
  setSelectedSeconds,
  isActive,
}: ISetTimePicker) => {
  return (
    <Picker
      selectedValue={selectedSeconds}
      style={styles.picker}
      onValueChange={(itemValue) => {
        setSelectedSeconds(itemValue);
        if (!isActive) {
          setSeconds(itemValue);
        }
      }}
    >
      {timeOptions.map((value) => (
        <Picker.Item key={value} label={formatTimeValueDisplay(value)} value={value} />
      ))}
    </Picker>
  );
};

export default SetTimePicker;

const styles = StyleSheet.create({
  picker: {
    height: 250,
    width: 200,
  },
});
