import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@constants/routes';
import BootSplash from 'react-native-bootsplash';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {navigationRef} from './NavService';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const init = async () => {};

  const onNavigationReady = () => {
    init().finally(() => {
      setTimeout(async () => {
        await BootSplash.hide({fade: true});
      }, 5000);
    });
  };
  return (
    <NavigationContainer onReady={onNavigationReady} ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
