import {View} from 'react-native';
import React from 'react';
import PageView from '@components/pageView';
import {AppText} from '@components/appText/AppText';

type Props = {};

const MyProfile = (_props: Props) => {
  return (
    <PageView
      statusBar
      safeAreaView
      headerText="My Profile"
      showHeader
      headerNavigation="drawer">
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AppText value="welcome to my profile" type="pageTitle" />
      </View>
    </PageView>
  );
};

export default MyProfile;
