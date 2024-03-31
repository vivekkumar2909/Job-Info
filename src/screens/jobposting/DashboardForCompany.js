/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_COLOR } from '../../utils/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DashboardForCompany = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bottomView}>
                {/* hello */}
                <TouchableOpacity
                    onPress={() => { setSelectedTab(0); }}
                    style={[styles.bottomTab, { borderTopWidth: selectedTab === 0 ? 3 : 0, borderTopColor: 'green' }]}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 0 ? 'green' : 'black' }]} source={require('../../images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(1); }}
                    style={styles.bottomTab}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 1 ? 'green' : 'black' }]} source={require('../../images/search-user.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <Image style={styles.iconTab} source={require('../../images/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(2); }}
                    style={styles.bottomTab}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 2 ? 'green' : 'black' }]} source={require('../../images/chat1.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(3); }}
                    style={styles.bottomTab}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 3 ? 'green' : 'black' }]} source={require('../../images/user1.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DashboardForCompany;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
    },
    bottomView: {
        width: '100%',
        height: verticalScale(70),
        backgroundColor: BG_COLOR,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 0.6,
        shadowOffset: { x: 0, y: 1 },
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomTab: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTab: {
        width: scale(30),
        height: scale(30),
    }
});
