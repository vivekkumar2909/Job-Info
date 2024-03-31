/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import SelectUser from './SelectUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  });

  const getData = async () => {
    let type = AsyncStorage.getItem('USER_TYPE');
    if (type !== null) {
      if (type === 'company') {
        navigation.navigate('DashboardForCompany');
      }
      else {
        navigation.navigate('SelectUser');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <Text style={styles.name}>Job Info</Text>
      <Text style={styles.slogan}>Post & Find Jobs in One Place</Text>
      <Text style={styles.slogan}>Post & Find Jobs in One Place</Text>

    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR
  },
  // welcome: {
  //     fontSize: 20,
  //     textAlign: 'center',
  //     margin: 10,
  // },
  // instructions: {
  //     textAlign: 'center',
  //     color: '#333333',
  //     marginBottom: 5,
  // },
  logo: {
    width: scale(100),
    height: verticalScale(100),
  },
  name: {
    fontSize: moderateScale(40),
    textAlign: 'center',
    fontWeight: '600',
    marginTop: moderateVerticalScale(10),
    color: '#000',
  },
  slogan: {
    fontSize: moderateScale(16),
    fontStyle: 'italic',
    position: 'absolute',
    fontWeight: '600',
    bottom: moderateVerticalScale(80),

    color: '#000',
  },
});
