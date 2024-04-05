/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Modal, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BG_COLOR } from '../../../utils/Colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import CustomInput from '../../../components/CustomInput';
import CustomDropDown from '../../../components/CustomDropDown';
import CustomSolidBtn from '../../../components/CustomSolidBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Profiles } from '../../../utils/Profiles';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/Loader';

const EditJob = () => {

    const router = useRoute();

    const [jobTitle, setJobTitle] = useState(router.params.data.jobTitle);
    const [jobdes, setJobDesc] = useState(router.params.data.jobdes);
    const [jobexp, setJobExp] = useState(router.params.data.jobexp);
    const [jobpac, setPackage] = useState(router.params.data.jobpac);
    const [jobcom, setJobComp] = useState(router.params.data.jobcom);
    const [jobSkill, setJobSkill] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [openModalCategory, setOpenModalCategory] = useState(false);
    const [openModalSkill, setOpenModalSkill] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const [selectedSkill, setSelectedSkill] = useState('Select Skill');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Profiles.map((item, index) => {
            if (item.category === router.params.data.category) {
                setSelectedCategory(index);
                Profiles[index].keywords.map((x, y) => {
                    if (x[0] === router.params.data.jobSkill) {
                        setSelectedSkill(x[0]);
                    }
                });
            }
        });
    }, []);

    const postJob = async () => {
        let id = await AsyncStorage.getItem('USER_ID');
        let name = await AsyncStorage.getItem('NAME');
        setLoading(true);
        firestore().collection('jobs').doc(router.params.data.id).update({
            postedBy: id,
            postName: name,
            jobTitle,
            jobexp,
            jobdes,
            jobpac,
            jobcom,
            jobSkill,
            jobCategory,

        }).then(() => {
            setLoading(false);
            navigation.goBack();
        }).catch(err => {
            setLoading(false);
            console.log(err)
        });
    };

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack(); }}
                >
                    <Image style={styles.back} source={require('../../../images/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.post}>Edit Job</Text>
            </View>
            <CustomInput
                value={jobTitle}
                onChangeText={txt => { setJobTitle(txt); }}
                title={'Job Title'} placeholder={'ex. web development'}
            // bad={badEmail !== '' ? true : false}
            />
            <CustomInput
                value={jobdes}
                onChangeText={txt => { setJobDesc(txt); }}
                title={'Job Description'} placeholder={'ex.this is  web development  job'}
            // bad={badEmail !== '' ? true : false}
            />
            <CustomDropDown
                title={'Category'}
                value={jobSkill}
                onChangeText={txt => { setJobSkill(txt); }}
                placeholder={selectedCategory === 'Select Category' ? 'Select Category' : jobCategory}
                onClick={() => { setOpenModalCategory(true); }}
            />
            <CustomDropDown
                title={'Skill'}
                value={jobSkill}
                onChangeText={txt => { setJobSkill(txt); }}
                placeholder={selectedSkill === 'Select Skill' ? 'Select Skill' : jobSkill}
                onClick={() => { setOpenModalSkill(true); }}
            />
            <CustomInput
                value={jobexp}
                onChangeText={txt => { setJobExp(txt); }}
                title={'Experience'} placeholder={'ex. required experience 5 years'}
                keyboardType={'number-pad'}
            // bad={badEmail !== '' ? true : false}
            />
            <CustomInput
                value={jobpac}
                onChangeText={txt => { setPackage(txt); }}
                title={'Package'} placeholder={'ex. 10L'}
                keyboardType={'number-pad'}
            // bad={badEmail !== '' ? true : false}
            />
            <CustomInput
                value={jobcom}
                onChangeText={txt => { setJobComp(txt); }}
                title={'Company'} placeholder={'ex. Google'}
            // bad={badEmail !== '' ? true : false}
            />

            <CustomSolidBtn style={{ marginTop: verticalScale(50) }} title={'Edit Job'} onClick={() => {
                navigation.goBack();
            }}
            />
            <Modal visible={openModalCategory} transparent style={{ flex: 1 }}>
                <View style={styles.modalMainView}>
                    <View style={styles.listingView}>
                        <Text style={[styles.header, { marginTop: moderateScale(20) }]}>Select Category</Text>
                        <FlatList
                            data={Profiles}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.profileItem}
                                        onPress={() => {
                                            Alert.alert('Category Clicked');
                                            setSelectedCategory(index);
                                            console.log(item.category);
                                            setJobCategory(item.category);
                                            setOpenModalCategory(false);
                                        }}
                                    >
                                        <Text>{item.category}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <Modal visible={openModalSkill} transparent style={{ flex: 1 }}>
                <View style={styles.modalMainView}>
                    <View style={styles.listingView}>
                        <Text style={[styles.header, { marginTop: moderateScale(20) }]}>Select Category</Text>
                        <FlatList
                            data={selectedCategory === 'Select Category' ? Profiles[0].keywords : Profiles[selectedCategory].keywords}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.profileItem}
                                        onPress={() => {
                                            Alert.alert('Category Clicked');
                                            setSelectedSkill(index);
                                            setJobSkill(item);
                                            setOpenModalSkill(false);
                                        }}
                                    >
                                        <Text>{item[0]}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <Loader visible={loading} />
        </SafeAreaView>
    );
};

export default EditJob;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
    },
    header: {
        width: '100%',
        height: verticalScale(45),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: moderateScale(20),
        color: 'black'
    },
    back: {
        width: scale(16),
        height: scale(16),
        // marginLeft:moderateScale(10),
    },
    post: {
        color: '#000',
        fontSize: moderateScale(20),
        fontWeight: '600',
        marginLeft: moderateScale(20),
    },
    modalMainView: {
        backgroundColor: 'rgba(0,0,0,.6)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listingView: {
        width: '90%',
        height: '90%',
        borderRadius: moderateScale(10),
        backgroundColor: BG_COLOR,
    },
    profileItem: {
        width: '90%',
        height: verticalScale(40),
        justifyContent: 'center',
        paddingLeft: moderateScale(20),
        alignSelf: 'center',
        // marginTop:moderateVerticalScale(20),
        borderBottom: 4,
    },
});

