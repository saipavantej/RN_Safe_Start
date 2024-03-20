import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {MainStackParamList} from '@constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {scaleFont} from '@utils/scaleDimension';
import PageView from '@components/pageView';
import {CUSTOM_FONT} from '@constants/fonts';
import {Color} from '@constants/colors';

type Props = NativeStackScreenProps<MainStackParamList, 'Main'>;

const Main = (_props: Props) => {
  return (
    <PageView backgroundColor="WHITE" type={'withHeader'} safeAreaView>
      <Text style={styles.titleText}>welcome to bubbles</Text>
    </PageView>
  );
};

export default Main;

const styles = StyleSheet.create({
  titleText: {
    ...CUSTOM_FONT.SemiBold,
    fontSize: scaleFont(26),
    color: Color.BLACK,
  },
});
