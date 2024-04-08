/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';

const UpdatePageOfProfile = () => {
  return (
    <SafeAreaView>
      <CustomHeader title={'Edit Profile'} />
    </SafeAreaView>
  );
};

export default UpdatePageOfProfile;
