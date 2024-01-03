import {MainStackParamList} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppDrawer} from './Drawer';

const Stack = createNativeStackNavigator<MainStackParamList>();

type Params = {};

const MainStack = (_params: Params) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'DrawerScreens'}
        screenOptions={{animation: 'ios', headerShown: false}}>
        <Stack.Screen name="DrawerScreens" component={AppDrawer} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
