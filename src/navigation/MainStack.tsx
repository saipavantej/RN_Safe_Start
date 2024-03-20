import {MainStackParamList} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '@screens/Main';
import React from 'react';

const Stack = createNativeStackNavigator<MainStackParamList>();

type Params = {};

const MainStack = (_params: Params) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{animation: 'ios', headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
