/* eslint-disable prettier/prettier */
import {Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { useNavigation } from '@react-navigation/native';

const LoginForCompany = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Log In </Text>
      <CustomInput title={'Email'} placeholder={'xyz@gmail.com'}/>
      <CustomInput title={'Password'} placeholder={'********'}  />
      <Text style={styles.forgotPassword}> Forgot Password?</Text>
      <CustomSolidBtn title={'Log In'}/>
      <CustomBorderBtn onClick={()=>{
        navigation.navigate('SignUpForCampany');
      }} title={'Create an account'}/>
    </SafeAreaView>
  );
};


export default LoginForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  logo:{
    width:scale(80),
    height:scale(80),
    alignSelf: 'center',
    marginTop:moderateVerticalScale(50),
  },
  title:{
    color:'#000',
    alignSelf: 'center',
    fontSize: moderateScale(30),
    fontWeight: '600',
    marginTop: moderateVerticalScale(20),
  },
  forgotPassword:{
    alignSelf: 'flex-end',
    fontWeight: '500',
    marginRight : moderateScale(20),
    marginTop : moderateVerticalScale(15),
    color: '#000',
    fontSize: moderateScale(17),
  }
});
