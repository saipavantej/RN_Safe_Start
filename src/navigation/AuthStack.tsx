import {AuthStackParamList} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@screens/welcome';
import React from 'react';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{animation: 'ios', headerShown: false}}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
