/* eslint-disable prettier/prettier */

import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SelectUser = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image source={require('../../images/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>What you are looking for?</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('JobPostingNavigator');
      }} style={styles.wantToHire}>
        <Text style={styles.btnTxt1}>
         Want to Hire Candidates
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wantToJob}>
        <Text style={styles.btnTxt2}> Want to Get Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#000',
  },
  wantToHire: {
    width: '90%',
    height: verticalScale(45),
    backgroundColor: '#000',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  wantToJob: {
    width: '90%',
    height: verticalScale(45),
    backgroundColor: '#000',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  btnTxt1: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontWeight: '500',
    paddingHorizontal: moderateScale(27),
  },
  btnTxt2: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontWeight: '500',
    paddingHorizontal: moderateScale(70),
  },
  logo: {
    width: scale(100),
    height: verticalScale(100),
    marginBottom : verticalScale(30),
},
});
