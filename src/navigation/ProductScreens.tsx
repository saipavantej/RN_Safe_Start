import {ProductScreensParamList} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductsList from '@screens/productsList';
import ProfileDetails from '@screens/ProfileDetails';

const Stack = createNativeStackNavigator<ProductScreensParamList>();

type Params = {};

const ProductScreens = (_params: Params) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={'ProductsList'}
        screenOptions={{animation: 'ios', headerShown: false}}>
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductDetails" component={ProfileDetails} />
      </Stack.Navigator>
    </>
  );
};

export default ProductScreens;
