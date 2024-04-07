/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';

const ProfileOptionsItem = ({ title, icon, onClick }) => {
    return (
        <TouchableOpacity onPress={ ()=>onClick() } style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: moderateScale(20), marginHorizontal: scale(20) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icon} style={{ width: scale(30), height: scale(30) }} />
                <Text style={{ color: 'black', marginLeft: moderateScale(15), fontSize: moderateScale(20) }}>{title}</Text>
            </View>
            <Image source={require('../images/right-arrow.png')} style={{ width: scale(18), height: scale(18) }} />
        </TouchableOpacity>
    );
};

export default ProfileOptionsItem;
