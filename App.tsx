import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import RootNavigation from '@navigation/RootNavigation';
// import {Provider} from 'react-redux';
// import store from './src/store';

type Props = {};

const App = (_props: Props) => {
  return (
    // <Provider store={store}>
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <RootNavigation />
      </BottomSheetModalProvider>
    </SafeAreaProvider>
    // </Provider>
  );
};

export default App;
