/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BG_COLOR } from '../../../utils/Colors';
import { moderateScale } from 'react-native-size-matters';

const MyJob = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Info</Text>
    </View>
  );
};

export default MyJob;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: BG_COLOR,
    },
    heading:{
        fontSize: moderateScale(25),
        fontWeight: '600',
        color: 'green',
        marginLeft:moderateScale(10),
    },
});
