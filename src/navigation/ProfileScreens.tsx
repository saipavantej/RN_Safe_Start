import {ProfileScreensParamList} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyProfile from '@screens/MyProfile';

const Stack = createNativeStackNavigator<ProfileScreensParamList>();

type Params = {};

const TasksScreens = (_params: Params) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'MyProfile'}
        screenOptions={{animation: 'ios', headerShown: false}}>
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </>
  );
};

export default TasksScreens;
