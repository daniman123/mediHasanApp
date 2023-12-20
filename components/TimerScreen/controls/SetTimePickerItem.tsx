import { Picker } from '@react-native-picker/picker';
import React from 'react';

interface ITimePickerOptionsProps {
  options: number[];
}

const SetTimePickerItem = ({ options }: ITimePickerOptionsProps) => {
  return (
    <>
      {options.map((value) => (
        <Picker.Item key={value} label={`${value} seconds`} value={value} />
      ))}
    </>
  );
};

export default SetTimePickerItem;
