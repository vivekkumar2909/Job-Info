/* eslint-disable prettier/prettier */
import {Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { useNavigation } from '@react-navigation/native';

const LoginForCompany = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const validate = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valideEmail = true;
    // let valideName = true;
    // let valideContact = true;
    // let valideCompanyName = true;
    // let valideCompanyAddress = true;
    let validePassword = true;
    if (email === '') {
      valideEmail = false;
      setBadEmail('Please Enter Email');
    }

    else if (email !== '' && email.length >= 3 && !email.toString().match(EmailRegex)) {
      valideEmail = false;
      setBadEmail('Please Enter Valid Email');
    }
    else if (email !== '' && email.length >= 3 && email.toString().match(EmailRegex)) {
      valideEmail = true;
      setBadEmail('');
    }
    if (password === '') {
      validePassword = false;
      setBadPassword('Please Enter Password');
    }
    else if (password !== '' && password.length < 6) {
      validePassword = false;
      setBadPassword('Please Enter Minimum 6 Character Password');
    }
    else if (password !== '' && password.length >= 6 && password.toString().match(nameRegex)) {
      validePassword = true;
      setBadPassword('');
    }

    return validePassword && valideEmail;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Log In </Text>
      <CustomInput
          value={email}
          onChangeText={txt => { setEmail(txt); }}
          title={'Email'} placeholder={'xyz@gmail.com'} bad={badEmail !== '' ? true : false} />
        {badEmail !== '' && <Text style={styles.errMsg}>{badEmail}</Text>}
        <CustomInput value={password}
          onChangeText={txt => { setPassword(txt); }} title={'Password'} placeholder={'********'} bad={badPassword !== '' ? true : false} />
        {badPassword !== '' && <Text style={styles.errMsg}>{badPassword}</Text>}
      <Text style={styles.forgotPassword}> Forgot Password?</Text>
      <CustomSolidBtn title={'Log In'}
        onClick={() => {
          if (validate()) {
            Alert.alert('Ready To Log IN');
          }
        }}
      />
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
  },
  errMsg: {
    marginLeft: moderateScale(20),
    color: 'red',
    // fontSize: moderateScale(17),
    marginTop: moderateVerticalScale(10),
  },
});
