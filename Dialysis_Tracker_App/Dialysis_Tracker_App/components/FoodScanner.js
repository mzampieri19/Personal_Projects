import React from 'react';
import {View, Text} from 'react-native';
import {useValue} from './ValueContext';

function FoodScanner() {
    const {currentValue} = useValue();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Food Scanner</Text>
      </View>
    );
  }

export default FoodScanner;