/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BG_COLOR } from '../../utils/Colors';
import { moderateScale, scale } from 'react-native-size-matters';

const ChangeProfilePic = () => {
  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity style={styles.backBtn}>
        <Image style={styles.back} source={require('../../images/arrow.png')}/>
      </TouchableOpacity>
      <Image style={styles.profile} source={require('../../images/profile-user.png')}/>
      <Text style={styles.pickBtn}>Upload a Picture</Text>
    </SafeAreaView >
  );
};

export default ChangeProfilePic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  back: {
    width: scale(24),
    height: scale(24),
  },
  backBtn: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    // width: scale(30),
  },
  profile:{
    width:scale(150),
    height:scale(150),
    resizeMode:'contain',
    alignSelf:'center',
    borderRadius:scale(150),
    marginTop:moderateScale(50),
  },
  pickBtn:{
    padding:moderateScale(10),
    borderWidth:1,
    color:'black',
    width:'60%',
    alignSelf:'center',
    textAlign: 'center',
    borderRadius:moderateScale(10),
    // backgroundColor:'#000',
    borderColor:'black',
    marginTop:moderateScale(50),
    // marginBottom:moderateScale(20),
  },
});

console.log('Jai Shree Ram');
