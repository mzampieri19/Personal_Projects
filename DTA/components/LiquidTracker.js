import React from 'react';
import {View, Text} from 'react-native';
import {useValue} from './ValueContext';

function LiquidTracker() {
    const {currentValue} = useValue();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liquid Tracker</Text>
      </View>
    );
  }

export default LiquidTracker;