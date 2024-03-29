/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';

const CustomSolidBtn = ({title,onClick}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>onClick()}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomSolidBtn;

const styles = StyleSheet.create({
  btn:{
    width:'90%',
    height : verticalScale(45),
    backgroundColor:'#000',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
    alignSelf: 'center',
  },
  btnText:{
    color:'#fff',
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontWeight: '600',
    // marginTop: moderateVerticalScale(20),
  }
});
