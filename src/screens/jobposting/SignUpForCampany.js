/* eslint-disable prettier/prettier */
import { Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignUpForCompany = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Create Account </Text>
        <CustomInput title={'Name'} placeholder={'xyz'} />
        <CustomInput title={'Email'} placeholder={'xyz@gmail.com'} />
        <CustomInput title={'Contact'} placeholder={'+91 96089*****'} />
        <CustomInput title={'Company Name'} placeholder={'ex google, MicroSoft'} />
        <CustomInput title={'Company Name'} placeholder={'ex google, MicroSoft'} />
        <CustomInput title={'Address'} placeholder={'ex. Delhi'} />
        <Text style={styles.forgotPassword}> Forgot Password?</Text>
        <CustomSolidBtn title={'Sign Up'} />
        <CustomBorderBtn title={'Log In'} onClick={()=>
        navigation.goBack()}/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SignUpForCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: scale(80),
    height: scale(80),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(50),
  },
  title: {
    color: '#000',
    alignSelf: 'center',
    fontSize: moderateScale(30),
    fontWeight: '600',
    marginTop: moderateVerticalScale(20),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontWeight: '500',
    marginRight: moderateScale(20),
    marginTop: moderateVerticalScale(15),
    color: '#000',
    fontSize: moderateScale(17),
  }
});
