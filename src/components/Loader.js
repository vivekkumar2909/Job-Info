/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Modal, ActivityIndicator } from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import { BG_COLOR } from '../utils/Colors';

const Loader = ({visible}) => {
    return (
        <Modal transparent visible ={visible} style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <View style={{ width: scale(10), height: scale(10), backgroundColor: BG_COLOR, borderRadius: moderateScale(10), justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'}/>
                </View>
            </View>
        </Modal>
    );
};

export default Loader;