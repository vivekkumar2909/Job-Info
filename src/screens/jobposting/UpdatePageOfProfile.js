/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Text, StyleSheet, Image, Alert, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBoredrBtn';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/Loader';
import firestore from '@react-native-firebase/firestore';
import CustomHeader from '../../components/CustomHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpForCompany = () => {
  const navigation = useNavigation('');

  const [loading, setLoading] = useState(false);
  const [accounCreated, setAccounCreated] = useState(false);

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
    const nameRegex = /^[A-Za-z]+$/;
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
    else if (email !== '' && email.length >= 3 && email.toString().match(EmailRegex)) {
      valideEmail = true;
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

    if (companyName === '') {
      valideCompanyName = false;
      setBadCompanyName('Please Enter Company Name');
    }
    else if (companyName !== '') {
      valideCompanyName = true;
      setBadCompanyName('');
    }

    if (companyAddress === '') {
      valideCompanyAddress = false;
      setBadCompanyAddress('Please Enter Company Address');
    }
    else if (companyAddress !== '') {
      valideCompanyAddress = true;
      setBadCompanyAddress('');
    }

    // if (password === '') {
    //   validePassword = false;
    //   setBadPassword('Please Enter Password');
    // }
    // else if (password !== '' && password.length < 6) {
    //   validePassword = false;
    //   setBadPassword('Please Enter Minimum 6 Character Password');
    // }
    // else if (password !== '' && password.length >= 6 && password.toString().match(nameRegex)) {
    //   validePassword = true;
    //   setBadPassword('');
    // }

    return  valideName && valideEmail && valideCompanyAddress && valideCompanyName && valideContact;

  };

  const updateUser = async () => {
    const id = await AsyncStorage.getItem('USER_ID');
    setLoading(true);
    firestore().collection('companies').doc(id).update({
      name,
      email,
      contact,
      companyName,
      companyAddress,
    }).then(async() => {
      // setName('');
      // setEmail('');
      // setContact('');
      // setCompanyName('');
      // setCompanyAddress('');
      // setPassword('');
      // setLoading(false);
      // setAccounCreated(true);
      await AsyncStorage.setItem('NAME',name);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }).catch(err => {
      setLoading(false);
      Alert.alert(err.message);
      console.log(err);
    });
  };

  useEffect(()=>{
    getData();
  },[]);

  const getData = async () =>{
    const emailS =await AsyncStorage.getItem('EMAIL');
    firestore().collection('companies').where('email','==',emailS).get().then(res=>{
      res.docs.forEach(element => {
        setName(element.data().name);
        setEmail(element.data().email);
        setContact(element.data().contact);
        setCompanyName(element.data().companyName);
        setCompanyAddress(element.data().companyAddress);
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={'Edit Profile'} onBackPress={() => navigation.goBack()} />
      <ScrollView>
        

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
          onChangeText={txt => { setContact(txt); }} title={'Contact'} placeholder={'+91 96089*****'} bad={badContact !== '' ? true : false} />
        {badContact !== '' && <Text style={styles.errMsg}>{badContact}</Text>}

        <CustomInput value={companyName}
          onChangeText={txt => { setCompanyName(txt); }} title={'Company Name'} placeholder={'ex google, MicroSoft'} bad={badCompanyName !== '' ? true : false} />
        {badCompanyName !== '' && <Text style={styles.errMsg}>{badCompanyName}</Text>}

        <CustomInput value={companyAddress}
          onChangeText={txt => { setCompanyAddress(txt); }} title={'Address'} placeholder={'ex. Delhi'} bad={badCompanyAddress !== '' ? true : false} />
        {badCompanyAddress !== '' && <Text style={styles.errMsg}>{badCompanyAddress}</Text>}

        {/* <CustomInput value={password}
          onChangeText={txt => { setPassword(txt); }} title={'Password'} placeholder={'********'} bad={badPassword !== '' ? true : false} />
        {badPassword !== '' && <Text style={styles.errMsg}>{badPassword}</Text>} */}

        <CustomSolidBtn title={'Update'} onClick={() => {
          if (validate()) {
            updateUser();
            // Alert.alert('Ready To Send Data on Server');
          }
        }} />

        
        <Loader visible={loading} />
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
  doneView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
