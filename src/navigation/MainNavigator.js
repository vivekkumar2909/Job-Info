/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import Splash from '../screens/onboarding/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JobPostingNavigator from './JobPostingNavigator';
import SelectUser from '../screens/onboarding/SelectUser';
import JobSerachingNavigator from './JobSerachingNavigator';
import DashboardForCompany from '../screens/jobposting/DashboardForCompany';
import AddJob from '../screens/jobposting/tabs/AddJob';
import EditJob from '../screens/jobposting/tabs/EditJob';
import UpdatePageOfProfile from '../screens/jobposting/UpdatePageOfProfile';
const STACK = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
    <STACK.Navigator>
        <STACK.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <STACK.Screen name="SelectUser" component={SelectUser} options={{ headerShown: false }} />
        <STACK.Screen name="JobPostingNavigator" component={JobPostingNavigator} options={{ headerShown: false }} />
        <STACK.Screen name="DashboardForCompany" component={DashboardForCompany} options={{headerShown:false}}  />
        <STACK.Screen name="AddJob" component={AddJob} options={{headerShown:false}}  />
        <STACK.Screen name="EditJob" component={EditJob} options={{headerShown:false}}  />
        <STACK.Screen name="JobSearching" component={JobSerachingNavigator} options={{ headerShown: false }} />
        <STACK.Screen name="UpdatePageOfProfile" component={UpdatePageOfProfile} options={{ headerShown: false }} />
      </STACK.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
