import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="ListScreen" component={ListScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
