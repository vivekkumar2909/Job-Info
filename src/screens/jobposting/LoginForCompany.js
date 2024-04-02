/* eslint-disable prettier/prettier */
import { Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForCompany = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const validate = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let valideEmail = true;
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

  const loginUser = () => {
    setLoading(true);
    firestore().collection('companies').where('email', '==', email).get().then(data => {
      setLoading(false);
      console.log(data.docs);
      if (data.docs.length > 0) {
        data.docs.forEach(item => {
          if (item.data().password === password) {
            setBadEmail('');
            setBadPassword('');
            goToNextScreen(item.id, item.data().name, item.data().email);
          }
          else {
            setBadPassword('Wrong Password');
          }
        });

      } else {
        setBadEmail('No User exists with this Email');
      }
    }).catch(err => {
      setLoading(false);
      Alert.alert(err.message);
      console.log(err);
    });
  };

  // eslint-disable-next-line no-shadow
  const goToNextScreen = async (id, name, email) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USER_ID', id);
    await AsyncStorage.setItem('USER_TYPE','company');
    navigation.navigate('DashboardForCompany');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
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
            loginUser();
          }
        }}
      />
      <CustomBorderBtn onClick={() => {
        navigation.navigate('SignUpForCampany');
      }} title={'Create an account'} />

      <Loader visible={loading} />

    </SafeAreaView>
  );
};


export default LoginForCompany;

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
    marginTop: moderateVerticalScale(10),
  },
});
