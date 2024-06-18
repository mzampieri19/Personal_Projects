import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useValue} from './ValueContext';

function LiquidTracker() {
    const {currentValue} = useValue();
    return (
      <View style={styles.container} >
        <Text>Liquid Tracker</Text>
        <Text> Username: {currentValue['username']}</Text>
        <Text> Status: {currentValue['status']}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },

  });

export default LiquidTracker;