/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignUpForCompany = () => {
  const navigation = useNavigation('');
  const nameRegex = /^[A-Za-z]+$/;
  const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [name, setName] = useState('');
  const [badname, setBadname] = useState('');

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  const [contact, setContact] = useState('');
  const [badContact, setBadContact] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [badCompanyName, setBadCompanyName] = useState('');

  const [companyAddress, setCompanyAddress] = useState('');
  const [badCompanyAddress, setBadCompanyAddress] = useState('');

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const validate = () => {
    let valideEmail = true;
    let valideName = true;
    let valideContact = true;
    let valideCompanyName = true;
    let valideCompanyAddress = true;
    let validePassword = true;
    if (name === '') {
      valideName = false;
      setBadname('Please Enter Name');
    }
    else if (name !== '' && name.length < 3) {
      valideName = false;
      setBadname('Please Enter Valid Name');
    }
    else if (name !== '' && name.length >= 3 && !name.toString().match(nameRegex)) {
      valideName = false;
      setBadname('Please Enter Valid Name');
    }
    else if (name !== '' && name.length >= 3 && name.toString().match(nameRegex)) {
      valideName = true;
      setBadname('');
    }
    if (email === '') {
      valideEmail = false;
      setBadEmail('Please Enter Email');
    }

    else if (email !== '' && email.length >= 3 && !email.toString().match(EmailRegex)) {
      valideEmail = false;
      setBadEmail('Please Enter Valid Email');
    }
    else if (name !== '' && email.length >= 3 && email.toString().match(EmailRegex)) {
      valideName = true;
      setBadEmail('');
    }

    const contactRegex = /^\d+$/;
    if (contact === '') {
      valideContact = false;
      setBadContact('Please Enter Contact Number');
    }

    else if (contact !== '' && contact.length < 10) {
      valideContact = false;
      setBadContact('Please Enter Valid Contact Number');
    }
    else if (contact !== '' && contact.length >= 10 && !contact.toString().match(contactRegex)) {
      valideContact = false;
      setBadContact('Please Enter Valid Contact Number');
    }
    else if (contact !== '' && contact.length >= 10 && contact.toString().match(contactRegex)) {
      valideContact = true;
      setBadContact('');
    }

    if (companyName ==='')
    {
      valideCompanyName = false;
      setBadCompanyName('Please Enter Company Name');
    }
    else if (companyName !== '' ) {
      valideCompanyName = false;
      setBadCompanyName('');
    }

    if (companyAddress ==='')
    {
      valideCompanyAddress = false;
      setBadCompanyAddress('Please Enter Company Address');
    }
    else if (companyAddress !== '' ) {
      valideCompanyAddress = false;
      setBadCompanyAddress('');
    }

    if (password ==='')
    {
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

    return validePassword && valideName && valideEmail && valideCompanyAddress && valideCompanyName && valideContact;

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={require('../../images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Create Account </Text>
        <CustomInput
          value={name}
          onChangeText={txt => { setName(txt); }}
          title={'Name'}
          placeholder={'xyz'}
          bad={badname !== '' ? true : false}
        />

        {badname !== '' && <Text style={styles.errMsg}>{badname}</Text>}
        <CustomInput
          value={email}
          onChangeText={txt => { setEmail(txt); }}
          title={'Email'} placeholder={'xyz@gmail.com'} bad={badEmail !== '' ? true : false} />
          {badEmail !== '' && <Text style={styles.errMsg}>{badEmail}</Text>}
        <CustomInput value={contact}
          onChangeText={txt => { setContact(txt); }} title={'Contact'} placeholder={'+91 96089*****'} />
        <CustomInput value={companyName}
          onChangeText={txt => { setCompanyName(txt); }} title={'Company Name'} placeholder={'ex google, MicroSoft'} />
        <CustomInput value={companyAddress}
          onChangeText={txt => { setCompanyAddress(txt); }} title={'Address'} placeholder={'ex. Delhi'} />
        <CustomInput value={password}
          onChangeText={txt => { setPassword(txt); }} title={'Password'} placeholder={'********'} />
        {/* <Text style={styles.forgotPassword}> Forgot Password?</Text> */}
        <CustomSolidBtn title={'Sign Up'} onClick={() => {
          if (validate()) {

          }
        }} />
        <CustomBorderBtn title={'Log In'} onClick={() =>
          navigation.goBack()} />
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
  },
  errMsg: {
    marginLeft: moderateScale(20),
    color: 'red',
    // fontSize: moderateScale(17),
    marginTop: moderateVerticalScale(10),
  },
});
