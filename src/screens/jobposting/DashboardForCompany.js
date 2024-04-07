/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_COLOR } from '../../utils/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyJob from './tabs/MyJob';
import SearchUser from './tabs/SearchUser';
import Chats from './tabs/Chats';
import CompanyProfile from './tabs/CompanyProfile';
import { useNavigation } from '@react-navigation/native';

const DashboardForCompany = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                {selectedTab === 0 ? (<MyJob />) : selectedTab === 1 ? (<SearchUser />) : selectedTab === 2 ? (<Chats />) : selectedTab === 3 ? (<CompanyProfile onJobsClick={() => { setSelectedTab(0); }} />) : (<MyJob />)};
            </Text>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(0); }}
                    style={[styles.bottomTab, { borderTopWidth: selectedTab === 0 ? 3 : 0, borderTopColor: 'green' }]}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 0 ? 'green' : 'black' }]} source={require('../../images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(1); }}
                    style={[styles.bottomTab, { borderTopWidth: selectedTab === 1 ? 3 : 0, borderTopColor: 'green' }]}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 1 ? 'green' : 'black' }]} source={require('../../images/search-user.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('AddJob') }}
                    style={styles.bottomTab}>
                    <Image style={styles.iconTab} source={require('../../images/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(2); }}
                    style={[styles.bottomTab, { borderTopWidth: selectedTab === 2 ? 3 : 0, borderTopColor: 'green' }]}>
                    <Image style={[styles.iconTab, { tintColor: selectedTab === 2 ? 'green' : 'black' }]} source={require('../../images/chat1.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSelectedTab(3); }}
                    style={[styles.bottomTab, { borderTopWidth: selectedTab === 3 ? 3 : 0, borderTopColor: 'green' }]}>
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
    },
});
