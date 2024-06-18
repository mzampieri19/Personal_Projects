import React from 'react';
import {View, Text} from 'react-native';
import {useValue} from './ValueContext';

function Account() {
    const {currentValue} = useValue();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account</Text>
      </View>
    );
  }

export default Account;