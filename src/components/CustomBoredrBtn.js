/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';

const CustomBorderBtn = ({title,onClick}) => {
  return (
    <TouchableOpacity onPress={()=> onClick()} style={styles.btn} >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

//This is Button For React Native


export default CustomBorderBtn;

const styles = StyleSheet.create({
  btn:{
    width:'90%',
    height : verticalScale(45),
    // backgroundColor:'#000',
    borderColor:'black',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
    alignSelf: 'center',
  },
  btnText:{
    color:'black',
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontWeight: '600',
    // marginTop: moderateVerticalScale(20),
  }
});
