/* eslint-disable react-native/no-inline-styles*/
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BG_COLOR } from '../../../utils/Colors';
import { moderateScale, scale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused} from '@react-navigation/native';
import ProfileOptionsItem from '../../../components/ProfileOptionsItem';
const CompanyProfile = () => {
  const [name, setName] = useState();
  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    setName(await AsyncStorage.getItem('NAME'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Job Info
      </Text>
      <TouchableOpacity style={{ marginHorizontal: scale(40), }} >
        <Image source={require('../../../images/profile-user.png')}
          style={styles.profile}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{name }</Text>
      <Text style={styles.ChangeProfile}>Edit Profile Picture</Text>
      <ProfileOptionsItem/>
      {/* <Text>Hii</Text> */}
    </View>
  );
};

export default CompanyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  heading: {
    fontSize: moderateScale(25),
    fontWeight: '600',
    color: 'green',
    marginLeft: moderateScale(10),
  },
  profile: {
    width: scale(100),
    height: scale(100),
    borderRadius: moderateScale(50),
    marginTop: moderateScale(20),
    alignSelf: 'center',
    padding: 'auto',
    marginHorizontal: scale(85),
  },
  ChangeProfile: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    color: 'black',
    fontSize: moderateScale(18),
    fontWeight: '600',
    padding: 'auto',
    marginHorizontal: scale(85),
  },
  name: {
    fontSize: moderateScale(25),
    fontWeight: '600',
    alignSelf:'center',
    marginHorizontal: scale(85),
    color: 'black',
    marginTop: moderateScale(20),
  },
});
