import React from 'react';
import {View, ScrollView} from 'react-native';
import {Spacer} from '@components/spacer/Spacer';
import {AppText} from '@components/appText/AppText';
import {assets} from '@constants/images';
import DrawerButton from './DrawerButton';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {removeAllItems} from '@utils/asyncStorage';
import {replace} from '@navigation/NavService';
import {Color} from '@constants/colors';

enum operationType {
  ROUTE = 'A',
  DIVIDER = 'B',
  TITLE = 'C',
  HEADER = 'E',
}

function CustomDrawer(props: DrawerContentComponentProps) {
  const {navigation, state} = props;
  const visit = state.index;

  const clickPageNestedStack = (
    root: string,
    screen: string,
    params: {} = {},
  ) => {
    setTimeout(() => {
      navigation.navigate(root, {
        screen: screen,
        params,
      });
    }, 100);
  };

  const logoutHandler = () => {
    removeAllItems().then(() => replace('AuthStack'));
  };

  const drawerItems = [
    {
      type: operationType.ROUTE,
      icon: assets.icons.products,
      label: 'Products',
      route: state.routeNames[0],
      screen: 'ProductsList',
      params: {},
      index: 0,
    },
    {
      type: operationType.ROUTE,
      icon: assets.icons.profile,
      label: 'My Profile',
      route: state.routeNames[1],
      screen: 'MyProfile',
      params: {},
      index: 1,
    },
    {
      type: operationType.DIVIDER,
    },
  ];

  return (
    <View style={{marginVertical: 40, flex: 1}}>
      <ScrollView bounces={false}>
        {drawerItems.map((item, index) => {
          if (item.type === operationType.TITLE && item.label) {
            return (
              <View key={index}>
                <View style={{marginLeft: 25}}>
                  <AppText
                    value={item.label}
                    type="custom"
                    fontFamily="Medium"
                    color="#363636"
                    fontSize={12}
                  />
                </View>
                <Spacer size={21} />
              </View>
            );
          } else if (
            item.type === operationType.ROUTE &&
            item.route &&
            item.label
          ) {
            return (
              <DrawerButton
                key={index}
                type={visit === item.index ? 'active' : 'inActive'}
                icon={item.icon}
                label={item.label}
                route={item.route}
                onPress={() =>
                  clickPageNestedStack(item.route, item.screen, item.params)
                }
              />
            );
          } else if (item.type === operationType.DIVIDER) {
            return (
              <View key={index} style={{marginHorizontal: 9, marginBottom: 28}}>
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '"rgba(151, 151, 151, 0.3)"',
                  }}
                />
              </View>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>
      <View style={{marginTop: 20}}>
        <View style={{marginBottom: -10}}>
          <DrawerButton
            type={'inActive'}
            icon={assets.icons.logout}
            label={'LogOut'}
            route={'AuthStack'}
            onPress={() => logoutHandler()}
          />
        </View>
        <View style={{marginLeft: 25}}>
          <AppText
            value="Version 0.0.1"
            type="default"
            color={Color.NEUTRAL_SECONDARY}
          />
        </View>
      </View>
    </View>
  );
}

export default CustomDrawer;
