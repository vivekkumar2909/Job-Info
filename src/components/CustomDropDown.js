/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { BG_COLOR } from '../utils/Colors';
import { TextInput } from 'react-native-gesture-handler';


const CustomDropDown = ({ title, placeholder, onClick, bad }) => {
    return (
        <TouchableOpacity
            onPress={() => onClick()}
            style={[styles.input, { borderColor: bad ? 'red' : '#9e9e9e' }]}>
            <Text style={[styles.title, { color: bad ? 'red' : 'black' }]}>{title}</Text>
            {/* <TextInput
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'} /> */}
            <Text style={{ color: placeholder ? '#9e9e9e' : 'black' }}>{placeholder}</Text>
            <Image style={styles.icon} source={require('../images/arrowdown.png')} />
        </TouchableOpacity>
    );
};

export default CustomDropDown;

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: verticalScale(45),
        borderWidth: 0.4,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        // justifyContent: 'center',
        paddingHorizontal: moderateScale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        top: -moderateVerticalScale(8),
        position: 'absolute',
        backgroundColor: BG_COLOR,
        paddingHorizontal: moderateScale(10),
        color: '#000',
    },
    icon: {
        width: scale(10),
        height: scale(10),
    },
});
