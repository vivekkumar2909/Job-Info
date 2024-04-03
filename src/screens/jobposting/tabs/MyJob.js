/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BG_COLOR } from '../../../utils/Colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyJob = () => {
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs();
  }, [isFocused]);

  const getJobs = async () => {
    let id = await AsyncStorage.getItem('USER_ID');
    firestore().collection('jobs').where('postedBy', '==', id).get().then(data => {
      let temp = [];
      data.docs.forEach(item => {
        temp.push({ ...item.data(), id: item.id });
      });
      setJobs(temp);
    });
  };

  const deleteJob = (id) => {
    firestore().collection('jobs').doc(id).delete().then(() =>
      getJobs());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Info</Text>
      {jobs.length === 0 ? <View style={styles.emptyView}>
        <Text style={styles.title} >Empty Jobs</Text>
      </View> : (<FlatList
        data={jobs}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.jobItem}>
              <Text style={styles.title}>Mobile development Job</Text>
              <Text style={styles.desc}>This is job for crow platform app development</Text>
              <Text style={styles.salary}>{'Experience: ' + item.jobexp}</Text>
              <Text style={styles.salary}>{'Salary: ' + item.jobpac + ' L/year'}</Text>
              <Text style={styles.salary}>{'Category: ' + item.jobCategory}</Text>
              <Text style={styles.salary}>{'Skill: ' + item.jobSkill}</Text>
              <View style={styles.bottomView}>
                <TouchableOpacity onPress={()=>{navigation.navigate('EditJob',{data:item});}} style={styles.editbtn}>
                  <Text>Edit Job</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteJob(item.id)} style={styles.deletebtn}>
                  <Text style={{}}>Delete Job</Text>

                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />)}

    </View>
  );
};

export default MyJob;

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
  jobItem: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
    backgroundColor: 'green',
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    // color: 'green',
    // marginLeft: moderateScale(10),
  },
  desc: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginTop: moderateScale(5),
  },
  salary: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginTop: moderateScale(5),
  },
  bottomView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateScale(20),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  editbtn: {
    width: '40%',
    height: verticalScale(30),
    // backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  deletebtn: {
    width: '40%',
    height: verticalScale(30),
    // borderColor:'red',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyView: {
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(10),
  },
});
