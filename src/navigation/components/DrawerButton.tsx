import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Spacer} from '@components/spacer/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {AppText} from '@components/appText/AppText';
import {Color} from '@constants/colors';

type Props = {
  type: 'active' | 'inActive';
  icon: ImageSourcePropType;
  label: string;
  route: string;
  onPress: (e: string) => void;
};

const DrawerButton = (props: Props) => {
  const {type, icon, label, route, onPress} = props;
  return (
    <View>
      {type === 'inActive' ? (
        <>
          <TouchableOpacity
            onPress={() => onPress(route)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 25,
            }}>
            <Image
              source={icon}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: Color.NEUTRAL_PRIMARY,
              }}
            />
            <Spacer direction="horizontal" size={8} />
            <AppText
              value={label}
              type="custom"
              fontFamily="Regular"
              color={Color.NEUTRAL_PRIMARY}
              fontSize={14}
            />
          </TouchableOpacity>
          <Spacer size={20} />
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => onPress(route)}
            style={{marginLeft: 9, marginRight: 10}}>
            <LinearGradient
              colors={[
                Color.SUCCESS_BACKGROUND,
                Color.SUCCESS_BACKGROUND,
                Color.SUCCESS_BACKGROUND,
              ]}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 25 - 9,
                paddingVertical: 10,
                borderRadius: 24,
              }}>
              <Image
                source={icon}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                  tintColor: Color.BRAND_PRIMARY_DARK,
                }}
              />
              <Spacer direction="horizontal" size={8} />
              <AppText
                value={label}
                type="custom"
                fontFamily="Regular"
                color={Color.BRAND_PRIMARY_DARK}
                fontSize={14}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Spacer size={20} />
        </>
      )}
    </View>
  );
};

export default DrawerButton;
