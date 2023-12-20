import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="X"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
