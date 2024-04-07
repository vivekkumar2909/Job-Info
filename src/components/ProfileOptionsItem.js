/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';

const ProfileOptionsItem = ({ title, icon, conClick }) => {
    return (
        <TouchableOpacity style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: moderateScale(20), marginHorizontal:scale(20) }}>
            <Image source={require('../images/suitcase.png')} style={{ width: scale(30), height: scale(30) }} />
        </TouchableOpacity>
    );
};

export default ProfileOptionsItem;
