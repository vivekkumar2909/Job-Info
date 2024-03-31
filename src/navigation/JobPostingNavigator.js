/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignUpForCampany from '../screens/jobposting/SignUpForCampany';
import DashboardForCompany from '../screens/jobposting/DashboardForCompany';


const STACK = createStackNavigator();

const JobPostingNavigator = () => {
  return (
    <STACK.Navigator>
      <STACK.Screen name="LoginForCampany" component={LoginForCompany} options={{headerShown:false}}  />
      <STACK.Screen name="SignUpForCampany" component={SignUpForCampany} options={{headerShown:false}}  />
      <STACK.Screen name="DashboardForCompany" component={DashboardForCompany} options={{headerShown:false}}  />
    </STACK.Navigator>
  );
};

export default JobPostingNavigator;
