/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>{onBackPress()}}>
        <Image style={styles.icon} source={require('../images/arrow.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(45),
    flexDirection: 'row',
    paddingLeft: moderateScale(15) ,
    alignItems: 'center',
  },
  icon: {
    width: scale(24),
    height: scale(24),
    marginLeft: moderateScale(10),
  },
  title:{
    fontSize:moderateScale(18),
    marginLeft:moderateScale(10),
    color:'#000',
    // fontWeight:'600'
  },
});
