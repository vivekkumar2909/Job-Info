/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import { BG_COLOR } from '../utils/Colors';
import { TextInput } from 'react-native-gesture-handler';

const CustomInput = ({title,placeholder}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder}/>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:verticalScale(45),
        borderWidth : 0.4,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        paddingHorizontal: moderateScale(15),
    },
    title:{
        alignSelf:'flex-start',
        marginLeft:moderateScale(20),
        top: -moderateVerticalScale(8),
        position:'absolute',
        backgroundColor: BG_COLOR,
        paddingHorizontal: moderateScale(10),
        color : '#000',
      },
});
