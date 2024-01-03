import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {memo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomDrawer from './components/CustomDrawer';
import {DrawerParamList} from '@constants/routes';
import {Color} from '@constants/colors';
import ProductScreens from './ProductScreens';
import MyProfile from '@screens/MyProfile';

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppDrawer = memo(() => {
  const insets = useSafeAreaInsets();
  return (
    <Drawer.Navigator
      initialRouteName={'ProductScreens'}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: {
          top: insets.top,
          bottom: insets.bottom,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          width: '70%',
          backgroundColor: Color.WHITE,
        },
      }}
      drawerContent={drawerProps => <CustomDrawer {...drawerProps} />}>
      <Drawer.Screen
        name={'ProductScreens'}
        component={ProductScreens}
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name={'ProfileScreens'}
        component={MyProfile}
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
});

export {AppDrawer};
