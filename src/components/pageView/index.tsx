import {Color, ColorOptions} from '@constants/colors';
import {
  useFocusEffect,
  useNavigation,
  useScrollToTop,
} from '@react-navigation/native';
import {scaleFont, scaleHeight, scaleImage} from '@utils/scaleDimension';
import React, {ReactNode, useCallback} from 'react';
import {
  Image,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PageViewType} from './Types';
import {CUSTOM_FONT} from '@constants/fonts';
import {assets} from '@constants/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  type?: keyof typeof PageViewType | Array<keyof typeof PageViewType>;
  backgroundColor?: ColorOptions;
  statusBar?: boolean;
  safeAreaView?: boolean;
  children?: ReactNode;
  showHeader?: boolean;
  headerText?: string;
  headerNavigation?: 'back' | 'drawer';
};

const PageView = ({
  type = 'withHeader',
  statusBar = true,
  showHeader = false,
  safeAreaView = true,
  backgroundColor = 'WHITE',
  headerText = '',
  headerNavigation,
  children,
}: Props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const scrollRef = React.useRef(null);
  useScrollToTop(scrollRef);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setHidden(!statusBar);
    }, [statusBar]),
  );

  const getSafeAreaViewStyles = (): StyleProp<ViewStyle> => {
    if (type === 'withHeader') {
      return {
        paddingTop: insets.top + scaleHeight(16),
        paddingBottom: insets.bottom,
      };
    } else {
      return {
        paddingTop: insets.top + scaleHeight(40),
        paddingBottom: insets.bottom,
      };
    }
  };

  const HeaderNavButton = () => {
    switch (headerNavigation) {
      case 'back':
        return (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.imageWrapper}>
            <Image
              source={assets.icons.leftArrow}
              style={styles.pageHeaderIcons}
            />
          </TouchableOpacity>
        );
      case 'drawer':
        return (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.imageWrapper}>
            <Image source={assets.icons.menu} style={styles.pageHeaderIcons} />
          </TouchableOpacity>
        );
      default:
        null;
    }
  };

  return (
    <View
      style={[
        PageViewType[type as keyof typeof PageViewType].container(
          backgroundColor,
        ),
        safeAreaView && getSafeAreaViewStyles(),
      ]}>
      <StatusBar
        animated={true}
        barStyle={false ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
      />
      {showHeader && (
        <View
          style={[
            styles.pageHeaderContainer,
            {
              paddingVertical: scaleHeight(10),
              marginBottom: scaleHeight(20),
            },
          ]}>
          <View style={{position: 'absolute', left: 0}}>
            {HeaderNavButton()}
          </View>
          <Text style={styles.pageHeaderText}>{headerText}</Text>
        </View>
      )}
      {children}
    </View>
  );
};
export default PageView;

const styles = StyleSheet.create({
  pageHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeaderIcons: {
    width: scaleImage(30),
    height: scaleImage(30),
    resizeMode: 'contain',
    tintColor: Color.NEUTRAL_PRIMARY,
  },
  pageHeaderText: {
    fontSize: scaleFont(18),
    color: Color.NEUTRAL_PRIMARY,
    ...CUSTOM_FONT.SemiBold,
  },
});
