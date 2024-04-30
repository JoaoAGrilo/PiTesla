import React from 'react';
import { Text } from 'react-native';

export default ({ fontFamily, fontSize, color, children }) => {
  return (
    <Text style={{ fontFamily, fontSize, color }}>
      {children}
    </Text>
  );
};

